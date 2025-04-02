'use strict';

const { spawn } = require('node:child_process');

function setPostData(data) {
    if (typeof data !== 'object') {
        return ['-d', data];
    }

    const params = [];
    
    Object.keys(data).forEach(key => {
        params.push('-d', `${key}=${data[key]}`);
    });

    return params;
}

function setHeaders(headers) {
    const params = [];

    Object.keys(headers).forEach(key => {
        params.push('-H', `${key}: ${headers[key]}`);
    });

    return params;
}

function generateResponse(error, data) {
    return {
        success: !Boolean(error),
        message: error ? 'failed' : 'success',
        data: data.toString(),
        json: () => {
            return !error ? JSON.parse(data.toString()) : {};
        },
        arrayBuffer: () => {
            return Buffer.concat(data);
        }
    }
}

function curl_request(params) {
    return new Promise(resolve => {
        const response = spawn('curl', params);
        const arrayData = [];

        response.stdout.on('data', (data) => {
            arrayData.push(data);
        });

        let err = 0;
        response.stderr.on('error', () => {
            err = 1;
        });

        response.on('close', () => {
            const responseAll = generateResponse(err, arrayData);
            resolve(responseAll);
        });        
    });
}

function SCGET_URL(url, options = {}) {
    options.method = (options.method || 'GET').toUpperCase();
    
    if (options.method === 'GET' && options.data) {
        throw new Error('Data não é permitido em requisição GET');
    }

    const params = ['-X', options.method];
    
    if (options.redirects) {
        params.push('-L');
    }

    if (options.method === 'POST') {
        if (!options.data) {
            throw new Error('Para POST é necessário o parâmetro' +
                ' "data"');
        }

        params.push(...setPostData(options.data));
    }

    if (options.headers) {
        params.push(...setHeaders(options.headers));
    }
    
    params.push(url);
    return curl_request(params);
}

module.exports = SCGET_URL;
