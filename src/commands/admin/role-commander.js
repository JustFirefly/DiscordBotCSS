const {Client, Interaction, Collection} = require('discord.js');

const roles = [
   '1162906468404703303', '1162904105115717735'
]
let guildMembers = new Collection();
/**
 * @param {Client} client
 * @param {Interaction} interaction
 */

module.exports = {
    
    callback: async(client, interaction) => {
        await interaction.deferReply();
        guildMembers = interaction.guild.members.cache;
        guildMembers.each(m => {
            m.roles.add(roles);
        });

        interaction.reply({
            content:"action complete!",
            ephemeral: true,
        })
    },
    name: 'role-commander',
    description: 'Used to initialise roles for users who have already joined.',
    //devOnly: Boolean,
    //testOnly: Boolean,
    //options: Object[],
}