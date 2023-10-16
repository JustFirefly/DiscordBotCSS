const getFiles = require("../utils/getFiles");
const path = require('path');
module.exports = (client) => {

    const eventFolders = getFiles(path.join(__dirname, '..', 'events'), true);
    console.log(eventFolders)
    for (const eventFolder of eventFolders){
        const eventFiles = getFiles(eventFolder);
        console.log(eventFiles)
        const eventName = eventFolder.replace(/\\/g,'/').split('/').pop();
        
        client.on(eventName, async (arg1, arg2) =>{
            for (const eventFile of eventFiles){
                const eventFunction = require(eventFile);
                await eventFunction(client, arg1, arg2);
                console.log(eventFile);
            }
        })

    }

    console.log("DONE!")

};