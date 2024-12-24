'use strict';

const { requestToServer } = require('./web/websocket.js');
const { loadContent } = require('./web/format-utils.js');

module.exports.requestToServer = requestToServer;
module.exports.loadContent = loadContent;
