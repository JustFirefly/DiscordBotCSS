

module.exports = async (client) =>{
    console.log("RUNNING Button!")
    try {
            if(!interactions.isButton()) return;

            await interaction.deferReply({ephemeral: true});
            const role = client.interaction.guild.roles.cache.get(interaction.customId);
            if(!role){
                client.interaction.editReply({
                    content: "Couldn't find the role!"
                })
                return;
            }

            const hasRole = client.interaction.member.roles.cache.has(role.id);
            if (hasRole){
                await client.interaction.member.roles.remove(role);
                await client.interaction.editReply(`The role ${role} has been removed.`);
                return;
            }
            await client.interaction.member.roles.add(role);
            await client.interaction.editReply(`The role ${role} has been added.`);
    } catch (error) {
        console.log(error);
    }
    
}