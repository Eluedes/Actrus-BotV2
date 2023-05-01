const discord = require('discord.js');
const limpar = require('../command/moderacao/limpar');
module.exports = {
	name: 'interactionCreate',
	execute: async (inter, client) => {
		if (inter.type === discord.InteractionType.ApplicationCommand) {
			const command = client.commands.get(inter.commandName);
			if (command) command.execute(inter, client);
			console.log()
		}
		
	},
};