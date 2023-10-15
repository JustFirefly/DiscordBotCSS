const {Client, IntentsBitField} = require("discord.js")

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

client.on('ready', (c) =>{
    console.log("READY!")
})

//login the bot
client.login("MTE2MjkxMzg3NTczODQ5MjkyOA.GFzTv4.ckrTFJWVPOy9w5E8-EDOowZBJq16Y2SfW28fUw");