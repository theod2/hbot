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

    var num = args[0]
	if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Tu n'as pas la permission d'utiliser cette commande !")
    if(!num) message.channel.send('<:off_false:597060657279402004> Tu dois préciser le numéro du warn à supprimer !');
    if(isNaN(num)) return message.channel.send("<:off_false:597060657279402004> Ce n'est pas un nombre !")
   
   let sql = `SELECT * FROM warn WHERE num = ${num}`;
    con.query(sql, function(err, result){
        console.log(result)
        if(result == "") return message.channel.send("<:off_false:597060657279402004> Le warn que vous essayez de supprimer n'existe pas !")
        
            let sql1 = `DELETE FROM warn WHERE num = ${num}`;
            con.query(sql1, function(err){
                if(err) throw err;
            })
        
    })
   

    const embed = new Discord.RichEmbed()
    .setColor("#FF8C00")
    .setTitle("Warn supprimé <:warndel:597080647223214080>")
    .addField("Numéro du warn :", num)
    .setFooter("Hosty.fr", message.author.displayAvatarURL)
    .setTimestamp();
    message.channel.send(embed)
    


}

module.exports.help = {
	name: "delwarn"
}