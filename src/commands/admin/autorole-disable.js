const {ApplicationCommandOptionType, Client, Interaction, PermissionFlagsBits} = require('discord.js');
const AutoRole = require('../../models/AutoRole')
module.exports = {
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    
    callback: async (client, interaction) => {
        try {
            const targetRoleId = interaction.options.get('role').value;
            await interaction.deferReply();
            if(!(await AutoRole.exists({roleId: targetRoleId}))){
                interaction.editReply("Auto role has not been set up, use '/autorole-config' to do so.")
                return;
            }
            await AutoRole.findOneAndDelete({roleId: targetRoleId})
            interaction.editReply("Auto role has been disabled. To set it up again, use '/autorole-config' to do so.")
        } catch (error) {
            console.log(error);
        };
    },
    
    
    name: 'autorole-disable',
    description: 'Disable the Auto Role for your server.',
    //devOnly: Boolean,
    //testOnly: Boolean,


    options: [
        {
            name:'role',
            description: 'roles to be removed',
            type: ApplicationCommandOptionType.Role,
            required: true,
        }

    ],

    permissionsRequired:[
        PermissionFlagsBits.Administrator
    ],
    
}