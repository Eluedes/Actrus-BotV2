const { EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
	name: 'limpar',
	description: 'Comando para limpar mensagens indevidas.',
	type: 1,
	options: [
		{
			name: 'quantidade',
			description: 'Coloque o número de mensagens que você deseja apagar',
			type: 4,
			required: true,
		},
	],

	execute(inter, client) {
		const quantidade = inter.options.getInteger('quantidade');
		const minimo = 1;
		const maximo = 99;

		if (!inter.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) {
			inter.reply({ content: 'Você não tem permissão para usar esse comando!', ephemeral: true });
			return;
		}

		if (!Number.isInteger(quantidade) || quantidade < minimo || quantidade > maximo) {
			inter.reply({ content: `A quantidade de mensagens deve ser entre ${minimo} e ${maximo}`, ephemeral: true });

		}

		try {
			inter.channel.bulkDelete(quantidade);

			const embed = new EmbedBuilder()
				.setColor('Random')
				.setDescription(`♻️ Foram apagadas ${quantidade} mensagens! ♻️`);
			inter.reply({ embeds: [embed] });
		}
		catch (error) {
			console.error(error);
			const embed = new EmbedBuilder()
				.setColor('RANDOM')
				.setDescription(`Ocorreu um erro ao apagar as mensagens: ${error.message}. Tira print e mande em nosso servidor de suporte`);
			inter.reply({ embeds: [embed], ephemeral: true });
		}
	},
};
