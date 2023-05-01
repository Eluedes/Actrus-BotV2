const { PermissionsBitField, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'embed',
    type: '1',
    description: 'Cria uma embed personalizado.',
    options: [
        {
            name: 'cor',
            type: 3,
            description: 'Deve utilizar codigos hexadecimal.',
            required: true,
        },
        {
            name: 'titulo',
            description: 'Coloque o Titulo que deseja na Embed.',
            type: 3,
            required: true,
        },
        {
            name: 'descricao',
            description: 'Aqui voce vai colocar o seu texto explicativo.',
            type: 3,
            required: true,
        },
        {
            name: 'imagem',
            type: 3,
            description: 'Faca o upload da imagem no i.imgur.com'
        },
        {
            name: 'footer',
            type: 3,
            description: 'rodape da embed.',
        },
    ],

    execute: (inter, client) => {

        const cor = inter.options.getString('cor');
        const titulo = inter.options.getString('titulo');
        const descricao = inter.options.getString('descricao');
        const imagem = inter.options.getString('imagem');
        const footer = inter.options.getString('footer');

        if (!inter.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) {
            inter.reply({ content: 'Você não tem permissão para usar esse comando!', ephemeral: true })
            return;
        }

        const embed = new EmbedBuilder()
        .setColor(cor)
        .setTitle(titulo)
        .setDescription(descricao)
        .setImage(imagem)
        .setFooter({ text: footer });

        inter.reply({ embeds: [embed]})

    },
};