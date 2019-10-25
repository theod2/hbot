const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
    var reason = args.join(" ");
    if(!reason) reason = "Raison non spécifiée par le client";
    var chan = message.guild.channels.find(c => c.name === `ticket-${message.author.id}`)
    if(chan) {
        message.channel.send("<:off_false:597060657279402004> Vous avez déjà un ticket d'ouvert. Vous ne pouvez pas en créer deux.")
    } else {
        message.guild.createChannel(`ticket-${message.author.id}`, {
            type: 'text',
            permissionOverwrites: [{
                id: message.guild.id,
                deny: ['READ_MESSAGES']
            }]
        }).then(c => {
            c.setParent("589379515264794624")
            let e = new Discord.RichEmbed()
                .setColor("#0yrsz")
                .setTitle("Ticket")
                .setDescription("Ticket crée par " + message.author.username + "." + " \n la raison de ce ticket est " + reason + ".")
                .setFooter("Hosty", message.author.displayAvatarURL)
                .setTimestamp();
            c.send(e);
            c.setTopic(`Créateur du ticket : ${message.author.username}\n Raison : ${reason} \n \n /close : ferme le ticket \n /add : ajoute quelq'un au ticket \n /remove : retire quelq'un du ticket`);
            var support = message.guild.roles.find(r => r.name === "ticket-perm")
            c.overwritePermissions(support, {SEND_MESSAGES: true, READ_MESSAGE_HISTORY: true, READ_MESSAGES: true});
            c.overwritePermissions(message.author, {SEND_MESSAGES: true, READ_MESSAGE_HISTORY: true, READ_MESSAGES: true})
            message.channel.send(`Votre ticket (<#${c.id}>) à bien été créé !`)
        })
        message.delete()

    }

}

module.exports.help = {
    name: "new"
}