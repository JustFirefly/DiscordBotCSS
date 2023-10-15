

module.exports = async (client, interaction) =>{
    try {
            if(!interaction.isButton()) return;

            await interaction.deferReply({ephemeral: true});
            const role = interaction.guild.roles.cache.get(interaction.customId);
            if(!role){
                interaction.editReply({
                    content: "Couldn't find the role!"
                })
                return;
            }

            const hasRole = interaction.member.roles.cache.has(role.id);
            if (hasRole){
                await interaction.member.roles.remove(role);
                await interaction.editReply(`The role ${role} has been removed.`);
                return;
            }
            await interaction.member.roles.add(role);
            await interaction.editReply(`The role ${role} has been added.`);
    } catch (error) {
        console.log(error);
    }
    
}