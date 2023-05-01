const fs = require('fs');

module.exports = {
	execute: (client) => {
		fs.readdirSync('./commands/').forEach(dir => { // Mapeando as sub pastas do command
			fs.readdirSync(`./commands/${dir}`).forEach (file => {
				const command = require('../commands/' + dir + '/' + file);

				client.commands.set(command.name, command);
			});
		});
		fs.readdirSync('./events/').forEach(file => { // Mapeando os arquivos dos eventos.
			const event = require('../events/' + file);
			client.on(event.name, (...args) => event.execute(...args, client));
		});
	},
};
