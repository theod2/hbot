const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

    if(message.channel.id === "589379384440389652") {
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
            .setTitle("Vérification <:password:597060638883315712>")
            .setDescription("Recopiez le code sous ce message pour accéder au reste du serveur")
            .addField("Code :", code)
            .setFooter("Hosty.fr", message.author.displayAvatarURL)
            .setTimestamp();
        const base = await message.channel.send({text : message.author, embed : embed})
        message.delete()
        const filter = m => m.author.id === message.author.id;
        const collector = message.channel.createMessageCollector(filter, { time: 300000, max: 1});
        collector.on('collect', m => {
            if(m.content === code) {
                message.member.addRole(message.guild.roles.find(r => r.id === "594067050347888640"))
                base.delete()
                m.delete()
                message.author.send("Vérification effectuée avec succès !")
            }
            if(m.content != code) {
                base.delete()
                m.delete()
                message.author.send("<:warn:597060630943367169> Le code est incorrect ! Pour en obtenir un nouveau, faites /code dans le salon <#589379384440389652> . ")
            }
        });
        collector.on('end', collected => {
            base.delete();
        })
    }else {
        message.react("❌")
    }
}

module.exports.help = {
    name: "code"
}