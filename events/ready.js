const Discord = require('discord.js');
const {ping} = require("../ping");

module.exports = async (client) => {
    console.log("ready");

    /* code a uriliser pour setup le message
    client.channels.get('685536116765622299').send('Roles à obtenir : \n Notification : ❌').then(m => m.react('❌'))
     */
     client.channels.get('685536116765622299').fetchMessage('685537372741566550');

    /*const base = await client.channels.get('681184619894538276').send("<a:charge:597709109197930498> Chargement des status en cours...")
	setInterval(async function() {
		try {
			let hour = new Date().getHours();
			if(hour < 10) hour = "0" + hour;
			let min = new Date().getMinutes();
		    if(min < 10) min = "0" + min;
		    const status = new Discord.RichEmbed();
			status.setTitle('Status de Hosty.fr');
			status.setURL("https://hosty.fr/");
			status.setColor("RANDOM");
			status.setFooter('© 2019 - Hosty.fr');
            let result = await ping();
				if (result === 'offline') {
					status.addField(`Alpha :`, `<a:nope:597060761797394433> Indisponible`)
				} else {
					status.addField(`Alpha :`, `<a:yes:597060869678956555> En ligne - ${result}ms`)
				}
		    await base.edit(status)
	    }catch (e) {
            console.log(e);
		    await base.edit(`<:Warncount:597082527131369472> Une erreur est survenue !`)
	    }

    }, 6000)*/
};