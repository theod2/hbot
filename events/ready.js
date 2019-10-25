const ping = require('../functions/ping.js');
const Discord = require('discord.js');
const config = require('../informations/config.json');

module.exports = async (client) => {

	client.channels.get(config.status.channel).bulkDelete(3).catch(console.error);

    
const base = await client.channels.get(config.status.channel).send("<a:charge:597709109197930498> Chargement des status en cours...")
		setInterval(async function() {
		try {
			let hour = new Date().getHours()
			if(hour < 10) hour = "0" + hour
			let min = new Date().getMinutes()
		    if(min < 10) min = "0" + min
		 ping('Alpha', '109.21.197.209');
		const status = new Discord.RichEmbed()
			status.setTitle('Status de Hosty.fr')
			status.setURL("https://hosty.fr/")
			status.setColor("RANDOM")
			status.setFooter('© 2019 - Hosty.fr')
			ping('Web', '185.98.131.41');
			if (config.status.request.Web) {
			  status.addField(`Web :`, `<a:yes:597060869678956555> En ligne - ${config.status.request.Web}ms`)
		 } else {
		   status.addField(`Web :`, `<a:nope:597060761797394433> Indisponible`)
		 }
			if (config.status.request.Alpha) {
		   		status.addField(`Alpha :`, `<a:yes:597060869678956555> En ligne - ${config.status.request.Alpha}ms`)
		  	} else {
		    	status.addField(`Alpha :`, `<a:nope:597060761797394433> Indisponible`)
			  }
			  ping('Beta', 'Null');
			  if (config.status.request.Beta) {
				status.addField(`Beta :`, `<a:yes:597060869678956555> En ligne - ${config.status.request.Beta}ms \n \n*<:horloge:597726577056284672>Dernière actualisation : ${hour + ":" + min}*`)
		   } else {
			 status.addField(`Beta :`, `<a:nope:597060761797394433> Indisponible \n \n<:horloge:597726577056284672> *Dernière actualisation : ${hour + ":" + min}*`)
		   }
		base.edit(status)
	}catch (e) {
		base.edit(`<:Warncount:597082527131369472> Une erreur est survenue !`)
	}

		}, 60000)
	

	

client.user.setPresence({
    game: {
        name: "https://Hosty.fr/"
    }
});

}
