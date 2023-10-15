require('dotenv').config();
const {Client, IntentsBitField,} = require("discord.js");
const eventHandler = require('./handlers/eventHandler');
const mongoose = require('mongoose');
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
    ];



(async () => {
    console.log("HEY2")
    try {
        await mongoose.connect('mongodb://localhost:27017/discordJS', {keepAlive:true });
        console.log('Connected to DB.');
        eventHandler(client);
    
    } catch (error) {
        console.log(error);        
    }
})



//login the bot
client.login(process.env.TOKEN);