const Discord = require('discord.js');
const superagent = require('superagent');

require('dotenv').config();
console.log(process.env.bearer)

module.exports.run = async(bot, message, args) => {

    const ownerBot = "! Yublo#0666";
    let response = await superagent.get('https://www.blagues-api.fr/api/random')
                                    .set('Authorization', 'Bearer ' + process.env.bearer);


    let joketype = null
    if(response.body.type == "dark"){
        joketype = "humour noir `⚠`"
    } else if(response.body.type == "dev") {
        joketype = "développeur `🛠`"
    } else if(response.body.type == "global") {
        joketype = "normale `😊`"
    } else if(response.body.type == "blondes") {
        joketype = "blondes `👱‍♀️`"
    } else if(response.body.type == "limit") {
        joketype = "limite `😑`"
    } else if(response.body.type == "beauf") {
        joketype = "beauf `😎`"
    }

    const embed = new Discord.MessageEmbed()
    .setColor('#8BA3E4')
    .setTitle("`🤣` Blague - ID: `" + response.body.id + "` | Blague " + joketype)
    .setDescription(response.body.joke + ' ...... ' + response.body.answer)
    .setFooter('Joke\'Bot - By ' + ownerBot, bot.user.avatarURL());

    message.channel.send(embed);
    
};

module.exports.help = {
    name: "joke"
};