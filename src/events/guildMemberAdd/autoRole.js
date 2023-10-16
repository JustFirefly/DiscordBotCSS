const {Client, GuildMember} = require('discord.js');
const AutoRole = require('../../models/AutoRole');

/**
 *  @param {Client} client
 *  @param {GuildMember} member 
 *
 */

module.exports = async(client, member) => {
    try {
        let guild = member.guild;
        if(!guild) return;

        const autoRole = await AutoRole.find({guildId: guild.id});
        
        if(!autoRole) return;
        for await(const packet of autoRole){
            await member.roles.add(packet.roleId);

        }
    } catch (error) {
        console.log(`Error giving role: \n${error}`)
    }
}