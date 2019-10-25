const Discord = module.require('discord.js');
const mysql = require('mysql');
const con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'canard',
	database: 'hosty',
	port: '3306',
	insecureAuth : true
})

module.exports.run = async (bot, message, args) => {

    let reason = args.slice(1).join(' ');
    var toWarn = message.guild.member(message.mentions.users.first())
    if(!toWarn) return message.channel.send("<:off_false:597060657279402004> Tu dois mentionner un utilisateur !")
    var toWarnId = toWarn.id;
	if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Tu n'as pas la permission d'utiliser cette commande !");
     if (!reason) return message.channel.send("<:off_false:597060657279402004> Tu dois préciser une raison !")

    let sql = `INSERT INTO warn(user, moderateur, raison) VALUES ('${toWarnId}', '${message.author.id}', '${reason}')`;
    con.query(sql, function(err){
        if(err) throw err;
    })

    const embed = new Discord.RichEmbed()
    .setColor("#FF8C00")
    .setTitle("Warn <:redcard:597083264066519042>")
    .addField("Utilisateur :", toWarn)
    .addField("Modérateur :", message.author.username)
    .addField("Raison :", reason)
    .setFooter("Hosty.fr", toWarn.displayAvatarURL)
    .setTimestamp();
    message.channel.send(embed)
    


}

module.exports.help = {
	name: "warn"
}