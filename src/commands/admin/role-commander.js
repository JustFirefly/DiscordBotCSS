const {Client, Interaction, Collection} = require('discord.js');

const roles = [
   '1163416162844016650', '1163328751967404094', '1163329007698325524', '1163416099526803569'
]
let guildMembers = new Collection();
/**
 * @param {Client} client
 * @param {Interaction} interaction
 */

module.exports = {
    
    callback: async(client, interaction) => {
        //await interaction.deferReply();
        guildMembers = await interaction.guild.members.fetch();
        console.log(interaction.guild.name);
        guildMembers.each(m => {
            console.log(m.user.displayName);
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