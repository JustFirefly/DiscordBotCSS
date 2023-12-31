require('dotenv').config();
const {Client, IntentsBitField,} = require("discord.js");
const mongoose = require('mongoose');
const eventHandler = require('./handlers/eventHandler');
//create an interactable bot
const client = new Client({
    //set of permissions the bot can use
    intents: [ 
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildVoiceStates,
    ],
});

(() => {
    mongoose.connect('mongodb://127.0.0.1:27017/discordJS');

    eventHandler(client);
    
    //login the bot
    client.login(process.env.TOKEN);
})();
