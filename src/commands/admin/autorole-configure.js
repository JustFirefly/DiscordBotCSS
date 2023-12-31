const {ApplicationCommandOptionType, Client, Interaction, PermissionFlagsBits} = require('discord.js');
const AutoRole = require('../../models/AutoRole');
module.exports = {
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    
    callback: async (client, interaction) => {
        if(!interaction.inGuild()){
            interaction.reply("Can only access this command in a server!");
            return;
        }

        const targetRoleId = interaction.options.get('role').value;

        try {
            await interaction.deferReply();

            let autoRole = await AutoRole.findOne({roleId:targetRoleId});
            if(autoRole){
                interaction.editReply("Auto Role has been configured for that role! To disable run '/autorole-disable'.");
                return;
            } else {
                autoRole = new AutoRole(
                    {
                        guildId: interaction.guild.id,
                        roleId: targetRoleId,
                    }
                );
                await autoRole.save();
            }
            interaction.editReply("AutoRole has now been configured. To disable, run '/autorole-disable'.")
            

        } catch (error) {
            console.log(error);
        }
    },
    
    
    name: 'autorole-configure',
    description: 'Configure the Auto Role for your server.',
    //devOnly: Boolean,
    //testOnly: Boolean,
    
    options: [
        {
            name: 'role',
            description: 'The role you want users to obtain when joining.',
            type: ApplicationCommandOptionType.Role,
            required: true,
        }
    ],

    permissionsRequired:[
        PermissionFlagsBits.Administrator
    ],
    
    botPermissions: [PermissionFlagsBits.ManageRoles,],

}