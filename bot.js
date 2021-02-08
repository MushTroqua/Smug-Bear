const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
//Thing required to connect to the Discord API.
const { Client, MessageEmbed } = require('discord.js');
//Plugin from Discord.js
client.on('ready', async () => {
        console.log("Smug Bear version 0.7");
        console.log("Created by matsu#3622.")
        client.user.setActivity("with these hands")
        console.log('Ready to fuck those motherfuckers up.');
//Boot up sequence
});

    const prefix = "s!";
        client.on("message", function(message) {
          if (message.author.bot) return;
          if (!message.content.startsWith(prefix)) return;

        const commandBody = message.content.slice(prefix.length);
        const args = commandBody.split(' ');
        const command = args.shift().toLowerCase();
        const userID = "680436857758416900";


          //This is the help command.
              const help = new Discord.MessageEmbed()
                  .setColor('#4985e9')
                  .setTitle("Here you go.")
                  .setAuthor("Smug Bear's Help Page","https://cdn.discordapp.com/emojis/756556429078560798.png?v=1")
                  .addFields(
                    { name:'s!help', value:'Displays this page.' },
                    { name:'s!ping', value:'Pong! Shows the latency of the bot.'},
                    { name:'s!avatar', value:'Shows your avatar.'}
                  )

              if (command === 'help'){
                message.channel.send(help);
              }

        //This is the ping and pong command. Pretty standard.
            if (command === "ping") {
            const timeTaken = Date.now() - message.createdTimestamp;
              if (message.author.id === userID){
                message.channel.send(`Hello Siopao! This message had a latency of ${timeTaken}ms.`);
              } else {
                message.channel.send(`Pong, motherfucker. This message had a latency of ${timeTaken}ms.`);
            }
          }

        //This is the display avatar command.
            const avatar = new Discord.MessageEmbed()
                .setColor('#4985e9')
                .setTitle('🖼Avatar')
                .setImage(message.author.avatarURL())

             if (command === 'avatar') {
            message.channel.send(avatar);
            }



        });

client.login(config.BOT_TOKEN);
