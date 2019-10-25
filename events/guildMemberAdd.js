const Discord = require('discord.js')


module.exports = async (bot, member) => {

function getCode() {
    var code = "";
    var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+×÷=/#@!%?*<>";

    for (var i = 0; i < 6; i++) {
        code += char.charAt(Math.floor(Math.random() * char.length));
    }
    return code;
}
var code = getCode();

    const embed = new Discord.RichEmbed()
        .setColor('#06167d')
        .setTitle("Vérification")
        .setDescription("Recopiez le code sous ce message pour accéder au reste du serveur")
        .addField("Code :", code)
        .setFooter("Hosty.fr", member.displayAvatarURL)
        .setTimestamp();
    var channel = bot.channels.get("589379384440389652")
    const base = await channel.send({text : member, embed : embed})

    const filter = m => m.author.id === member.id;
    const collector = channel.createMessageCollector(filter, { time: 300000, max: 1});
    collector.on('collect', m => {
        if(m.content === code) {
            member.addRole(member.guild.roles.find(r => r.id === "594067050347888640"))
            m.delete()
            member.send("Vérification effectuée avec succès !")
        }
        if(m.content != code) {
            m.delete()
            member.send("Le code est incorrect ! Pour en obtenir un nouveau, faites /code dans le salon <#589379384440389652> . ")
        }
    });
    collector.on('end', collected => {
        base.delete();
    })



};