const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.login("NTg3Mjc3ODc0NDM3MDI5ODkz.XWTdGQ.n-ZJ3kifx-4y5NGwOVsZQIwHljk");

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
        console.log("Je ne trouve pas de commandes");
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} chargé`);
        bot.commands.set(props.help.name, props);
    });
});

fs.readdir('./events/', (error, f) => {
    if (error) { return console.error(error); }
    console.log(`${f.length} events chargés`);

    f.forEach((f) => {
        let events = require(`./events/${f}`);
        let event = f.split('.')[0];
        bot.on(event, events.bind(null, bot));
    });
});
