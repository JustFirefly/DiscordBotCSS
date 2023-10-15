const {InteractionCollector, Client, Interaction, PermissionFlagsBits} = require('discord.js');
const AutoRole = require('../../models/AutoRole')
module.exports = {
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    
    callback: async (client, interaction) => {
    
        try {
            await interaction.deferReply();
            if(!(await AutoRole.exists({guildId: interaction.guild.id}))){
                interaction.editReply("Auto role has not been set up, use '/autorole-config' to do so.")
                return;
            }
            await AutoRole.findOneAndDelete({guildId: interaction.guild.id})
            interaction.editReply("Auto role has been disabled. To set it up again, use '/autorole-config' to do so.")
        } catch (error) {
            console.log(error);
        }
    },
    
    
    name: 'autorole-disable',
    description: 'Disable the Auto Role for your server.',
    //devOnly: Boolean,
    //testOnly: Boolean,

    permissionsRequired:[
        PermissionFlagsBits.Administrator
    ],
    
}