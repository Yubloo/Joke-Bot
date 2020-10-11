/* --- CONST --- */
const Discord = require('discord.js'); 
const bot = new Discord.Client();
const fs = require('fs');
const moment = require('moment');

/* --- VAR --- */
var prefix = "j!";

/* --- TOKEN --- */
bot.login(process.env.token);

/* --- READY --- */
bot.on("ready", () => {
    //console.log("Je suis prêt !"); 
    bot.user.setActivity(`🤣 j!help`);
});

bot.commands = new Discord.Collection();

/* --- IMPORTANT --- */

fs.readdir("./Commandes/", (error, f) => {
  if(error) console.log(error);

  let commandes = f.filter(f => f.split(".").pop() === "js");
  if (commandes.length <= 0) return console.log("Aucune commandes trouvée ! ❌");

  commandes.forEach((f) => {

    let commande = require(`./Commandes/${f}`);
    console.log(`${f} commandes chargée !`);
    bot.commands.set(commande.help.name, commande);
  });
});

fs.readdir("./Events/", (error, f) => {
  if(error) console.log(error);
  console.log(`${f.length} events en chargement !`);

  f.forEach((f) => {
    const events = require(`./Events/${f}`);
    const event = f.split(".")[0];

  bot.on(event, events.bind(null,bot));
  })
})

/* --- COMMANDES --- */
   
bot.on('ready', () => {
  console.log("--------------------------")
  console.log(`${bot.user.username} is online! ✅`);
});
