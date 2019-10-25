const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
	message.channel.send("<:tabletennis:597060757003436052> pong ( "+ ~~bot.ping + " ms)")
}

module.exports.help = {
	name:"ping"
}