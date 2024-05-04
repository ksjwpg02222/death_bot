const { Events } = require('discord.js');
const logger = require('../logger.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute() {
        logger.info('Ready!');
    },
};