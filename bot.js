const Discord = require("discord.js");
const config = require("./config.json");
const Gamedig = require("gamedig")
const client = new Discord.Client();
//Thing required to connect to the Discord API.

const { Client, MessageEmbed, Collection } = require('discord.js');
//Plugin from Discord.js

//==============BOOT-UP==============//
client.on('ready', async () => {
  const info = require ('./package.json');
  var version = info.version;
  var name = info.author;
    console.log(version);
    console.log(name);
    console.log('All initialized and ready to fuck those motherfuckers up.');
    client.user.setActivity("with these hands");
});

//==============CODE==============//

    const prefix = "s!";
        client.on("message", function(message) {
          if (message.author.bot) return;
          if (!message.content.startsWith(prefix)) return;

        const commandBody = message.content.slice(prefix.length);
        const args = commandBody.split(' ');
        const command = args.shift().toLowerCase();
        const userID = ["680436857758416900", "439066710109323264"]; //Don't bother DM'ing this user. DON'T.
        const help = require('./help.js');

        function consoleLog(){
          try {
            let consoleLog = message.author.id + "/" + message.author.username + " used a command at " + message.guild.id + "/" + message.guild.name;
              console.log(consoleLog)
          } catch(err){
              console.log("I can't tell where this came from. Maybe a DM?")
            }
          };

        if (command === "info") {
          message.channel.send(help.github);
        consoleLog();
        }

        //This is the ping and pong command.
          if (command === "ping") {
            const timeTaken = Date.now() - message.createdTimestamp;
              if (message.author.id === userID[0]){
                  message.channel.send(`Hello Siopao! This message had a latency of ${timeTaken}ms.`);
              } else {
                  message.channel.send(`Pong, motherfucker. This message had a latency of ${timeTaken}ms.`);
                };
                consoleLog();
              }

          //This is the help command.
              if (command === 'help'){
                message.channel.send(help.page);
                consoleLog();
              }

        //This is the display avatar command
             if (command === 'avatar') {
              const avatar = new Discord.MessageEmbed()
                .setColor('#4985e9')
                .setTitle('🖼Avatar')
                .setImage(message.author.avatarURL())

            message.channel.send(avatar);
            consoleLog();
            }

            if (message.content.includes('s!echo')) {
              message.channel.send(message.content.replace('s!echo',''));
              message.delete(message.author);
              consoleLog();
            }
            if (command === "random"){
              let math = Math.floor(Math.random() * 11);
              message.channel.send("<:game_die:820909565281042452>" + "Here's a random number:" + " [" + math + "]");

            }

            if ((command === "forcestop") & (message.author.id == userID[1])) {
              stop();
            } //Only if needed.


            //LOOK INTO gamedig for Minecraft server functionality.


    });

client.login(config.BOT_TOKEN);
