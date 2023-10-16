const {Client, VoiceState, ChannelType} = require('discord.js');
const {Collection} = require('discord.js');
const voiceCollection = new Collection();


/**
 *  @param {Client} client
 *  @param {VoiceState} oldState
 *  @param {VoiceState} newState
 *
 */

module.exports = async (client, oldState, newState) =>{
    try {
        const member = newState.member
        const user = member.user;

        if(newState.channel?.id === '1163416744136810506'){
            const channel = await newState.guild.channels.create({
                name: `${user.displayName}'s Voice Chat`,
                type: ChannelType.GuildVoice,
                parent: newState.channel.parent,
            });

            member.voice.setChannel(channel);
            voiceCollection.set(user.id, channel.id);

        }else if(!newState.channel){
                if(oldState.channelId === voiceCollection.get(newState.id)){
                    return oldState.channel.delete();
                }
            }

    } catch (error) {
        console.log(error);
    }
}