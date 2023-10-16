const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const roles = [
    {
        id:'1162996533227180163',
        label: 'AI'
    },
    {
        id: '1162996707974459442',
        label: 'Programming'
    },
    {
        id: '1162996708687487017',
        label: 'Data Analyst'
    },
    {
        id: '1162996711778689094',
        label: 'Game Design'
    },
]

const pings = [
    {
        id: '1163329073884438588',
        label: 'AI Pings'
    },
    {
        id: '1163329138405412924',
        label: 'Programming Pings'
    },
    {
        id: '1163329139118444545',
        label: 'Data Analyst Pings'
    },
    {
        id: '1163329140569669713',
        label: 'Game Design Pings'
    },
    ]
module.exports = async (client) => {
    try {
        let channel = client.channels.cache.get('1163418341596217354');
    
        if(!channel) return;

        const row1 = new ActionRowBuilder();
        roles.forEach(role => {
            row1.components.push(new ButtonBuilder()
            .setCustomId(role.id).setLabel(role.label).setStyle(ButtonStyle.Primary)
            );
        })
        const row2 = new ActionRowBuilder();
        pings.forEach(role => {
            row2.components.push(new ButtonBuilder()
            .setCustomId(role.id).setLabel(role.label).setStyle(ButtonStyle.Secondary)
            );
        })
        channel.send(
            {
                content:"Claim a role to get related pings, forums and resources!",
                components: [row1, row2],

            }
        )
    } catch (error) {
        console.log(`Oh no!\n ${error}`)
    }
}