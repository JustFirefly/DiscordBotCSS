const {Schema, model} = require('mongoose');

const autoRoleSchema = new Schema(
    {
        guildId: {
            type: String,
            required: true,
        },
        roleId: {
            type:String,
            required: true,
            unique:true,
        },
    });

module.exports = model('AutoRole', autoRoleSchema);

