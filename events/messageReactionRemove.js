const Discord = require("discord.js");
module.exports = async(client, reaction, user) =>{
    console.log('ok')
    if(reaction.message.id === '685537372741566550'){
        if(reaction._emoji.name === '❌'){
            let role = reaction.message.guild.roles.find(r => r.name === "notif");
                console.log('ok')
                await reaction.message.guild.members.get(user.id).removeRole(role).catch();
        }
    }
};