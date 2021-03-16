const Discord = require("discord.js");
const config = require("./config.json");
const Gamedig = require("gamedig")
const client = new Discord.Client();
//Thing required to connect to the Discord API.

const { Client, MessageEmbed, Collection } = require('discord.js');
//Plugin from Discord.js

const userID = ["680436857758416900", "439066710109323264"]; //Don't bother DM'ing these users. DON'T.

//==============BOOT-UP==============//
  client.on('ready', async () => {
    const info = require ('./package.json');
    var version = info.version;
    var name = info.author;
      console.log(version);
      console.log(name);
      client.users.fetch(userID[1]).then((user) => {
      user.send("Bot has activated. If you didn't activate this bot, then do `s!forcestop`. If you did, then don't mind this message.")
      .catch(() => console.log("I didn't find matsu#3622... Is this a private instance of me? If so, please change the second userID to your own."));
    });
      client.user.setActivity("with these hands");
      console.log('All initialized and ready to fuck those motherfuckers up.');

  });

//==============CODE==============//

    const prefix = "s!";
        client.on("message", function(message) {
          if (message.author.bot) return;
          if (!message.content.startsWith(prefix)) return;

        const commandBody = message.content.slice(prefix.length);
        const args = commandBody.split(' ');
        const command = args.shift().toLowerCase();
        const userAuthor = message.author.toString();
        const help = require('./help.js');
        const topicArray = require('./topic.json');

        function consoleLog(){
          try {
            let consoleLog = message.author.id + "/" + message.author.tag + " used " + message.content + " at " + message.guild.id + "/" + message.guild.name;
              console.log(consoleLog)
          } catch(err){
            let cltype = message.channel.type;
            let dmlog = message.author.id + "/" + message.author.tag + " used " + message.content + " at " + cltype
              console.log(dmlog)
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
              try {
                if (message.channel.type === 'dm') throw message.channel.send(`What are you doing, ${userAuthor}? You can't execute that here.`);
                  message.channel.send(message.content.replace('s!echo',''));
                  message.delete(message.author);
                  consoleLog();
              }catch(err) {
              console.log("Error in doing " + message.content);
            }
          }

            if (command === "random"){
              let math = Math.floor(Math.random() * 101);
              message.channel.send("<:game_die:820909565281042452>" + "Here's a random number:" + " [" + math + "]");
              consoleLog();
            }

            if (command === "topic"){
              let topic = topicArray.topic;
              let emoji = topicArray.emojis;
              const randomEmoji = emoji[Math.floor(Math.random() * 18)];
              const randomTopic = topic[Math.floor(Math.random() * 58)];
              const topicEmbed = new Discord.MessageEmbed()
                .setColor('#4985e9')
                .setTitle(randomEmoji + " Showing a topic. " + randomEmoji)
                .setTimestamp()
                .setFooter(message.author.nickname)
                .setDescription(randomTopic)
              message.channel.send(topicEmbed);
              consoleLog();
            }

            if (command === "spicy"){
              let pickup = topicArray.lines;
                const randomPickUp = pickup[Math.floor(Math.random() * 17)];
                try{
                  message.author.send(randomPickUp);
                  consoleLog();
              } catch(error){
                  console.log(message.author.tag+"'s was closed so I sent it to the channel instead");
              } finally{
                  if (message.channel.type === 'text') {
                  message.channel.send("Sent you a spicy quote :black_heart:");
                } else return
              }
            }

            if ((command === "forcestop") & (message.author.id === userID[1])) {
              stop();
            } //Only if needed.

            //LOOK INTO gamedig for Minecraft server functionality.


    });

client.login(config.BOT_TOKEN);
