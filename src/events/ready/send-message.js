const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const roles = [
    {
        id:'1162903925419167785',
        label: 'AI'
    },
    {
        id: '1162905178161283082',
        label: 'Programming'
    }
]
module.exports = async (client) => {
    try {
        let channel = client.channels.cache.get('1163009198292992000');
    
        if(!channel) return;

        const row = new ActionRowBuilder();
        roles.forEach(role => {
            row.components.push(new ButtonBuilder()
            .setCustomId(role.id).setLabel(role.label).setStyle(ButtonStyle.Primary)
            );
        })

        channel.send(
            {
                content:"Claim a role to get related pings, forums and resources!",
                components: [row],

            }
        )
    } catch (error) {
        console.log(`Oh no!\n ${error}`)
    }
}