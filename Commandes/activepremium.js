const Discord = require('discord.js');
const fs = require('fs');
const bdd = require('../JSON/premium_code.json')

module.exports.run = async(bot, message, args) => {

    code = args.join(" ")
    if(!code){
        message.channel.send("`❌` **ERROR:** `j!activepremium [CODE]`")
    } else if(code == bdd.codeforyublo.code){
        if(message.author.id == bdd.codeforyublo.id){
            message.channel.send("`✅` **ACTIVE:** Le premium numéro `" + bdd.codeforyublo.premium_number + "` est activé !")
        } else {
            message.channel.send("`❌` **ERROR:** Votre ID ne correspond pas !")
        }
    } else {
        message.channel.send("`❌` **ERROR:** Mauvais code ! Merci de contacter le support de Joke'Bot.")
    }
    
};

module.exports.help = {
    name: "activepremium"
};