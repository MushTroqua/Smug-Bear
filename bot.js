
const Discord = require("discord.js");
const config = require("./config.json");
const Gamedig = require("gamedig")
const client = new Discord.Client();
//Thing required to connect to the Discord API.

const { Client, MessageEmbed, Collection } = require('discord.js');
//Plugin from Discord.js

//=========================================================================================//
//=====================================BOOT-UP SEQUENCE====================================//
//=========================================================================================//
client.on('ready', async () => {
        console.log("Smug Bear version 0.7");
        console.log("Created by matsu#3622.")
        client.user.setActivity("with these hands")
        console.log('Ready to fuck those motherfuckers up.');

//=========================================CODE=========================================//
});

    const prefix = "s!";
        client.on("message", function(message) {
          if (message.author.bot) return;
          if (!message.content.startsWith(prefix)) return;

        const commandBody = message.content.slice(prefix.length);
        const args = commandBody.split(' ');
        const command = args.shift().toLowerCase();
        const userID = "680436857758416900";

        //This is the ping and pong command.
          if (command === "ping") {
            const timeTaken = Date.now() - message.createdTimestamp;
              if (message.author.id === userID){
                  message.channel.send(`Hello Siopao! This message had a latency of ${timeTaken}ms.`);
              } else {
                  message.channel.send(`Pong, motherfucker. This message had a latency of ${timeTaken}ms.`);
                    }
              }

          //This is the help command.
          const help = require('./help.js');
              if (command === 'help'){
                message.channel.send(help.page);
              }

        //This is the display avatar command.
             if (command === 'avatar') {
               const avatar = new Discord.MessageEmbed()
                   .setColor('#4985e9')
                   .setTitle('🖼Avatar')
                   .setImage(message.author.avatarURL())
            message.channel.send(avatar);
            }

            //Note to self: LOOK INTO gamedig for Minecraft server functionality.
        });

client.login(config.BOT_TOKEN);
