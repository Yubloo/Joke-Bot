const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {

    const ownerBot = "! Yublo#0666";

    const embed = new Discord.MessageEmbed()
    .setColor('#8BA3E4')
    .setTitle("`🔗` Dernières mises-à-jours")
    .setDescription("Dernière MAJ. 12/10/20 - 18h45:\n- Ajout de la commande `lastupdate`\n- Ajout de l'invitation dans le `info`")
    .setFooter('Joke\'Bot - By ' + ownerBot, bot.user.avatarURL());

    message.channel.send(embed);
    
};

module.exports.help = {
    name: "lastupdate"
};