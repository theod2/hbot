const Discord = require("discord.js");

exports.run = (client, message, args) => {
    var help = new Discord.RichEmbed()
    .setDescription("📋 **| __Liste des commandes du bot Hosty.__**")
    .addField("👑 **__Support & Owners__**", "`ban`, `kick`,  `eval`")
    .addField("<:network:597060699813969931> **__Bénévoles__**", "`clear`, `delwarn`, `warn`, `seewarns`")
    .addField("<:supports:597110592893091851> **__Ticket__**", "`new`, `close`, `add`, `remove`")
    .addField("<:team:597112378651312138> **__Utilisateurs__**", "`Ping`")
    .setColor("#FF0033")
    .setFooter(`Help - Hosty.fr`)
message.channel.send(help)
}

module.exports.help = {
    name: "help"
}