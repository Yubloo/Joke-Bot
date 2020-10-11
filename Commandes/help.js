const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {

    const ownerBot = "! Yublo#0666";

    const embed = new Discord.MessageEmbed()
    .setColor('#8BA3E4')
    .setTitle("`📑` Page d'aide")
    .setDescription(":warning: Commandes à utilisées avec le préfix: **`j!`**\n\n`joke`: Blague aléatoire\n`info`: Informations sur Joke'Bot")
    .setFooter('Joke\'Bot - By ' + ownerBot, bot.user.avatarURL());

    message.channel.send(embed);
    
};

module.exports.help = {
    name: "help"
};