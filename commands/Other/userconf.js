/* Intended to override Klasa default. */

const { Command } = require('klasa');

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: 'userconf',
      enabled: false,
      runIn: ['text'],
      cooldown: 2,
      bucket: 1,
      aliases: [],
      permLevel: 0,
      botPerms: [],
      requiredConfigs: [],
      description: 'Not available!',
      quotedStringSupport: false,
      usage: '',
      usageDelim: '',
      extendedHelp: 'No extended help available.',
    });
  }

  async run() { return; }
};