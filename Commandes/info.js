const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async(bot, message, args) => {

    const ownerBot = "! Yublo#0666";

    const embed = new Discord.MessageEmbed()
    .setColor('#8BA3E4')
    .setTitle("`📑` Informations")
    .setDescription("Toutes les blagues sont prises avec l'API [Blagues API](https://www.blagues-api.fr).\n\nCe bot a été créé par `" + ownerBot + "`. Il est actuellement sur `" + bot.guilds.cache.size + "` serveurs !\n\nPour m'inviter c'est [ici](https://discord.com/oauth2/authorize?client_id=742384764904013946&permissions=8&scope=bot) !")
    .setFooter('Joke\'Bot - By ' + ownerBot, bot.user.avatarURL());

    message.channel.send(embed);
    
};

module.exports.help = {
    name: "info"
};