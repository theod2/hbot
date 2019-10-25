const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
    var support = message.guild.roles.find(r => r.name === "tickets-perm")
    if(message.channel.name.startsWith("ticket-")) {
        const base = await message.channel.send("<:warn:597060630943367169> Êtes vous sur de vouloir supprimer votre ticket ? Vous ne pourrez plus retrouver les message. \n :white_check_mark: Oui \n <:off_false:597060657279402004> non")
        await base.react("✅")
        await base.react("❌")

        const collector = base.createReactionCollector((reaction, user) => user.id === message.author.id);

        collector.on('collect', async(reaction) => {
            if (reaction.emoji.name === "✅") {
                message.channel.delete()
                message.author.send("<:off_vrai:597060666750402570> Votre ticket à bien été supprimé !")
            }

            if (reaction.emoji.name === "❌") {
                base.delete().catch()
                message.channel.send("<:off_false:597060657279402004> Action annulée. ")
            }
        });
    } else {
        message.channel.send("<:off_false:597060657279402004> Ce salon n'est pas un ticket !")
    }
}

module.exports.help = {
    name: "close"
}