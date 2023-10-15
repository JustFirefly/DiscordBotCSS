require('dotenv').config();
const {Client, IntentsBitField,ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");
const eventHandler = require('./handlers/eventHandler');

//create an interactable bot
const client = new Client({
    //set of permissions the bot can use
    intents: [ 
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});
const roles = [{
        id:'1162903925419167785',
        label:'AI',
    },
    {
        id:'1162905178161283082',
        label:'Programming',
    },
    ]

eventHandler(client);

//login the bot
client.login(process.env.TOKEN);