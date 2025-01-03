'use stric';

/**
 * Simi recriado por Lm Only
 * Otimizado e melhorado
 */

const { readFileSync } = require('fs');
const { WRT_FL } = require('./functions.js');
const simi = JSON.parse(readFileSync('./src/json/ia.json'));

/**
 * Faz o simi decorar palavras para responder
 * @param {String} [Word|Keyword] - Inputs de palavras
 */
function educar(type, info) {
    let word = info.message?.conversation || info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.conversation || null;

    if (typeof word  !== "string" || word.length > 25) {
        return null;
    }

    word = word.toLowerCase();

    if (type == 'conversation') {
        if (simi[word]) return;
        simi[word] = {
            words: []
        };
        WRT_FL('./src/json/ia.json', simi);
        return;
    }
    if (type == 'extendedTextMessage') {
        if (simi[word]) {
            simi[word].words.push(info.message?.extendedTextMessage?.text?.toLowerCase());
            WRT_FL('./src/json/ia.json', simi);
            return;
        }
        
        simi[word] = {
            words: [info.message?.extendedTextMessage?.text?.toLowerCase()]
        };
        WRT_FL('./src/json/ia.json', simi);
        return;
    }
}

/**
 * Verifica se contém uma palavra
 * @param {String} word
 * @return sting
 */
function verificar(word) {
    word = word.toLowerCase();
    if (word && simi[word]?.words[0]) {
        const words = simi[word].words;
        return words[Math.floor(Math.random() * words.length)];
    }
    
    return null;
}

exports.verificar = verificar;
exports.educar = educar;
