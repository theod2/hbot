const Discord = require("discord.js");
module.exports = async(client, reaction, user) =>{
    if(reaction.message.id === '685537372741566550'){
        if(reaction._emoji.name === '❌'){
            let role = reaction.message.guild.roles.find(r => r.name === "notif");
            if(!reaction.message.guild.members.get(user.id).roles.has(role)){
                await reaction.message.guild.members.get(user.id).addRole(role).catch();
            }
        }
    }
};