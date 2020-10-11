const Discord = require("discord.js");
const prefix = "j!";

module.exports = async(bot, message) => {

    if (!message.content.startsWith(prefix)) return;
    if(message.author.bot) return; 
    if(message.channel.type === "dm") return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commande = args.shift();

    const cmd = bot.commands.get(commande);

    if(!cmd) return;

    cmd.run(bot, message, args);
};