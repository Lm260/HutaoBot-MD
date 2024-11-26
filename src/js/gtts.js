'use strict';

/**
 * Google TextToSpeech
 * Atualizado por Lm Only
 * Função Aprimorada
 */
const { request } = require('undici');
const {
    createWriteStream
} = require('fs');

const BASE_URL = 'http://translate.google.com/translate_tts';
const MAX_CHARS = 100;
const LANGUAGES = {
    'af': 'Afrikaans',
    'sq': 'Albanian',
    'ar': 'Arabic',
    'hy': 'Armenian',
    'ca': 'Catalan',
    'zh': 'Chinese',
    'zh-cn': 'Chinese (Mandarin/China)',
    'zh-tw': 'Chinese (Mandarin/Taiwan)',
    'zh-yue': 'Chinese (Cantonese)',
    'hr': 'Croatian',
    'cs': 'Czech',
    'da': 'Danish',
    'nl': 'Dutch',
    'en': 'English',
    'en-au': 'English (Australia)',
    'en-uk': 'English (United Kingdom)',
    'en-us': 'English (United States)',
    'eo': 'Esperanto',
    'fi': 'Finnish',
    'fr': 'French',
    'de': 'German',
    'el': 'Greek',
    'ht': 'Haitian Creole',
    'hi': 'Hindi',
    'hu': 'Hungarian',
    'is': 'Icelandic',
    'id': 'Indonesian',
    'it': 'Italian',
    'ja': 'Japanese',
    'ko': 'Korean',
    'la': 'Latin',
    'lv': 'Latvian',
    'mk': 'Macedonian',
    'no': 'Norwegian',
    'pl': 'Polish',
    'pt': 'Portuguese',
    'pt-br': 'Portuguese (Brazil)',
    'ro': 'Romanian',
    'ru': 'Russian',
    'sr': 'Serbian',
    'sk': 'Slovak',
    'es': 'Spanish',
    'es-es': 'Spanish (Spain)',
    'es-us': 'Spanish (United States)',
    'sw': 'Swahili',
    'sv': 'Swedish',
    'ta': 'Tamil',
    'th': 'Thai',
    'tr': 'Turkish',
    'vi': 'Vietnamese',
    'cy': 'Welsh'
};

/**
 * Função para falar 
 * @param {String} _lang - Idioma em LANGUAGES
 */
function Text2Speech(_lang) {
    try {
        const lang = (_lang || 'en').toLowerCase();

        if (!LANGUAGES[lang]) {
            throw new Error('Language not supported: ' + lang);
        }

        const getArgs = getArgsFactory(lang);

        return {
            tokenize,
            createServer: (port) => createServerOn(getArgs, port),
            stream: (text) => stream(getArgs, text),
            save: (filepath, text, callback) => save(getArgs, filepath, text, callback)
        };
    } catch (err) {
        console.error(err);
    }
}

/**
 * Salva o áudio gerado em um arquivo
 * @param {Function} getArgs - Função para gerar os parâmetros da requisição
 * @param {String} filepath - Caminho do arquivo para salvar o áudio
 * @param {String} text - Texto a ser convertido em fala
 * @param {Function} callback - Função de callback após a conclusão
 */
function save(getArgs, filepath, text, callback) {
    const textParts = tokenize(text);
    const total = textParts.length;
    const {
        eachSeries
    } = require('async');
    eachSeries(textParts, async (part, cb) => {
        const index = textParts.indexOf(part);
        const headers = getHeader();
        const args = getArgs(part, index, total);
        const fullUrl = BASE_URL + args;

        const writeStream = createWriteStream(filepath, {
            flags: index > 0 ? 'a' : 'w'
        });

        const {
            body
        } = await request(fullUrl, {
            method: 'GET',
            headers
        });

        body.pipe(writeStream);

        writeStream.on('finish', cb);
        writeStream.on('error', cb);
    }, callback);
}

/**
 * Cria um stream de áudio a partir do texto
 * @param {Function} getArgs - Função para gerar os parâmetros da requisição
 * @param {String} text - Texto a ser convertido em fala
 * @returns {Stream} - Stream de áudio
 */
function stream(getArgs, text) {
    const textParts = tokenize(text);
    const total = textParts.length;
    const MultiStream = require('multistream');

    return MultiStream(textParts.map((part, index) => {
        const headers = getHeader();
        const args = getArgs(part, index, total);
        const fullUrl = BASE_URL + args;

        return async () => {
            const { body } = await request(fullUrl, {
                method: 'GET',
                headers
            });

            return body;
        };
    }));
}

/**
 * Gera cabeçalhos para a requisição
 * @returns {Object} - Cabeçalhos HTTP
 */
function getHeader() {
    const fakeUa = require('fake-useragent');
    return {
        "User-Agent": fakeUa()
    };
}

/**
 * Função geradora de parâmetros para a requisição
 * @param {String} lang - Idioma
 * @returns {Function} - Função para gerar os parâmetros
 */
function getArgsFactory(lang) {
    return (text, index, total) => {
        const textlen = text.length;
        const encodedText = encodeURIComponent(text);
        return `?ie=UTF-8&tl=${lang}&q=${encodedText}&total=${total}&idx=${index}&client=tw-ob&textlen=${textlen}`;
    };
}

/**
 * Divide o texto em partes adequadas
 * @param {String} text - Texto a ser tokenizado
 * @returns {Array} - Partes do texto
 */
function tokenize(text) {
    if (!text) throw new Error('No text to speak');
    const escapeStringRegexp = require('escape-string-regexp');
    const punc = '¡!()[]¶;|°•—«»≤≥«»‹›\n ';
    const puncList = punc.split('').map(char => escapeStringRegexp(char));
    const pattern = puncList.join('|');
    const parts = text.split(new RegExp(pattern)).filter(p => p.length > 0);
    const output = [];
    let i = 0;

    for (let part of parts) {
        if (!output[i]) {
            output[i] = '';
        }

        if (output[i].length + part.length < MAX_CHARS) {
            output[i] += part;
        } else {
            i++;
            output[i] = part;
        }
    }

    if (output[0]) {
        output[0] = output[0].substr(1); // Remove o primeiro caractere se existir
    }

    return output;
}

/**
 * Cria um servidor HTTP para o serviço de Text-to-Speech
 * @param {Function} getArgs - Função para gerar os parâmetros da requisição
 * @param {Number} port - Porta para o servidor
 */
function createServerOn(getArgs, port) {
    const {
        createServer
    } = require("http");
    const {
        parse
    } = require('url');

    const server = createServer((req, res) => {
        const queryData = parse(req.url, true).query;
        let argsCallback = getArgs;

        if (queryData.lang && LANGUAGES[queryData.lang]) {
            argsCallback = getArgsFactory(queryData.lang);
        }

        if (queryData.text) {
            res.writeHead(200, {
                'Content-Type': 'audio/mpeg'
            });
            stream(argsCallback, queryData.text).pipe(res);
        } else {
            console.log(req.headers);
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({
                code: -1,
                message: `Missing text. Please try: ${req.headers.host}?text=your+text`
            }));
        }
    });

    server.listen(port);
    console.log("Text-to-Speech Server running on port " + port);
}

module.exports = Text2Speech;