const {ApplicationCommandOptionType, PermissionFlagsBits} = require('discord.js');
module.exports = {
    name: 'ban_user',
    description: 'Bans a member',
    options: [
        {
            name: 'target-user',
            description: 'the user to be banned',
            required: true,
            type: ApplicationCommandOptionType.Mentionable,
        },
        {
            name: 'reason',
            description: 'The reason user is banned.',
            type: ApplicationCommandOptionType.String,
        },
    ],

    permissionsRequired: [PermissionFlagsBits.Administrator],

    callback: (client, interaction) => {
        interaction.reply(`banning...`);
    }
}