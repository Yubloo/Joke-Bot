module.exports = async(client) => {

    client.on('ready', () => {
        console.log(`${client.user.username} is online! ✅`);
      });
}