const { ActivityType  } = require("discord.js")

module.exports = {
	name: 'ready',
	execute: async (client) => {
		console.log(`O ${client.user.tag} esta online!👍`);

		const data = client.commands;

		await client.application.commands.set(data);

		client.user.setStatus('online');
		
		const activities = [
			'Entre no melhor Hotel!',
			'https://ihabbi.city ',
			'Venha para o nosso MultiVerso.',
			
		];

		setInterval(() => {
			const status = activities[Math.floor(Math.random() * activities.length)];
			client.user.setPresence({ activities: [{ name: `${status}`}]});
		}, 8000);
	},
};