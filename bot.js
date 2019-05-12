const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("563563245839843348")
setInterval(function() {
channel.send(`lol wlc on server pro bot a77obk`);
}, 30)
})

client.login(process.env.BOT_TOKEN);