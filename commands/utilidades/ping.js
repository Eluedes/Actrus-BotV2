module.exports = {
	name: 'ping',
	type: 1,
	description: 'Mostra quanto de ms o bot esta.',

	execute: (inter, client) => {
		inter.reply(`meu ping e ${client.ws.ping}ms`);
	},
};