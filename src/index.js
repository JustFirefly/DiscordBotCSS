require('dotenv').config();
const {Client, IntentsBitField} = require("discord.js");
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

eventHandler(client);

//login the bot
client.login(process.env.TOKEN);