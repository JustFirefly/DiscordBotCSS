const {testServer} = require("../../../config.json");
const getApplicationCommands = require("../../utils/getApplicationCommands");
const getLocalCommands = require('../../utils/getLocalCommands');
const compareCom = require("../../utils/compareCom");
module.exports = async (client) => {
    try {
        const localCommands = getLocalCommands();
        const applicationCommands = await getApplicationCommands(client, testServer);
        for(const localCommand of localCommands){
            const {name, description, options} = localCommand;
            
            const existingCommand = await applicationCommands.cache.find(
                (cmd) => cmd.name === name
            );
            
            if (existingCommand){
                if(localCommand.deleted){
                    await applicationCommands.delete(existingCommand.id);
                    console.log("DELETED!")
                    return;
                }
                if(compareCom(existingCommand, localCommand)){
                    await applicationCommands.edit(existingCommand.id, {
                        description,
                        options,
                    });
                    console.log("EDITTED!");
                }
            }else{
                if(localCommand.deleted){
                    console.log("SKIPPING!");
                    continue;
                }

                await applicationCommands.create({
                    name,
                    description,
                    options,
                });

                console.log("REGISTERED NEW COMMAND!");
            }

        }
    } catch (error) {
        console.log(`Oh no! \n${error}`)
    }
};