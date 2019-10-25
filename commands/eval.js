const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

	if(message.author.id === "450639357871783946" || message.author.id === "373566634025287681") {
		var toEval = args.join(" ");
		if(!toEval) return message.channel.send("<:off_false:597060657279402004> Il n'y a rien à éval.")

		try {
			let evaled = eval(toEval)
			message.channel.send("\`\`\`" + evaled + "\`\`\`")
		} catch (e) {
			message.channel.send("```Erreur : \n " + e + "```")
		}
	} else {
		message.channel.send("<:off_false:597060657279402004> Tu n'as pas la permission d'utiliser cette commande !")
	}
}

module.exports.help = {
	name: "eval"
}