const { Client, GatewayIntentBits, Collection } = require('discord.js');
const configuration = require('./configuration.json');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildBans,
		GatewayIntentBits.GuildEmojisAndStickers,
		GatewayIntentBits.GuildIntegrations,
		GatewayIntentBits.GuildInvites,
		GatewayIntentBits.GuildPresences,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.GuildMessageTyping,

	],
});

client.commands = new Collection();

require('dotenv').config();
require('./funcao/handleCommands').execute(client);

const process = require('node:process');

process.on('unhandledRejection', (reason, promise) => {
	console.log('Rejeição não tratada em:', promise, 'razão:', reason);
});


client.login(process.env.TOKEN);