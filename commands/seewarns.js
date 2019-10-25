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
    var toSeeWarn = message.guild.member(message.mentions.users.first())
    	if(!toSeeWarn){
		return message.channel.send("<:off_false:597060657279402004> Tu dois mentionner un utilisateur !")
    }
	var toSeeWarnId = toSeeWarn.id;

	let sql = `SELECT * FROM warn WHERE user = ${toSeeWarnId}`
	con.query(sql, function(err, result){
		if(!result[0]) {
			message.channel.send(`${toSeeWarn} n\'a aucun avertissement !`)
		}else {
			var warnlist = "";
     

    /*  var n = result.length;
      if(n > 5) n = 5;

      for(let i = 0; i  = n - 1; i++) {
        warnlist += `**Warn n°${result[i].num} :** \n Modérateur : @<${result[i].moderateur}>\n Raison : ${result[i].raison} \n`
      }
      if(result.length < 5) {
      	warnlist += `\n + ${result.length - 5} autres avertissements.`
      }*/

		
    	if(result[0]) {
    		let u = bot.users.get(result[0].moderateur)
 				warnlist = `**Warn n°${result[0].num} :** \n Modérateur : ${u}\n Raison : ${result[0].raison} \n`
			}
			if(result[1]) {
				let u = bot.users.get(result[1].moderateur)
				warnlist += `**Warn n°${result[1].num} :** \n Modérateur : ${u}\n Raison : ${result[1].raison} \n`
			}
			if(result[2]) {
				let u = bot.users.get(result[2].moderateur)
				warnlist += `**Warn n°${result[2].num} :** \n Modérateur : ${u}\n Raison : ${result[2].raison} \n`
			}
			if(result[3]) {
				let u = bot.users.get(result[3].moderateur)
				warnlist += `**Warn n°${result[3].num} :** \n Modérateur :${u}\n Raison : ${result[3].raison} \n`
			}
			if(result[4]) {
				let u = bot.users.get(result[4].moderateur)
				warnlist += `**Warn n°${result[4].num} :** \n Modérateur : ${u}\n Raison : ${result[4].raison} \n`
			}
			if(result[5]){
				warnlist += `\n + ${result.length - 5} autres avertissements.`
			}

		 const embed = new Discord.RichEmbed()
			.setColor("#FF8C00")
			.setTitle(`<:Warncount:597082527131369472> Avertissement(s) de ${toSeeWarn.user.username}`)
			.setDescription(warnlist)
			.setFooter("hosty.fr", toSeeWarn.user.displayAvatarURL)
			.setTimestamp();
      message.channel.send(embed);
		}
	})
  
}
module.exports.help = {
	name: "seewarns"
}