const messages = require("./en/messages");
const messagesPersian = require("./fa/messages");
const messagesBrazilian = require("./pt-BR/messages");
const messagesTurkish = require("./tr/messages");

module.exports = { en: messages, fa: messagesPersian, "pt-BR": messagesBrazilian, tr: messagesTurkish };

module.exports.defaultLang = "en";
