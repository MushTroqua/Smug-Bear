const Discord = require("discord.js");
const config = require("./config.json");
const Gamedig = require("gamedig")
const client = new Discord.Client();
const help = require('./help.js');

//==============BOOT-UP==============//
  client.on('ready', async () => {
    const info = require ('./package.json');
    var version = info.version;
    var name = info.author;
      console.log(version);
      console.log(name);
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
        const topicArray = require('./topic.json');
        const userID = config.userID;

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
              if (message.author.id === userID[1]){
                  message.channel.send(`Hello Master! This message had a latency of ${timeTaken}ms.`);
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
        function getUserFromMention(mention) {
        	if (!mention) return;

        	if (mention.startsWith('<@') && mention.endsWith('>')) {
        		mention = mention.slice(2, -1);

        		if (mention.startsWith('!')) {
        			mention = mention.slice(1);
        		}

        		return client.users.cache.get(mention);
        	}
        }

        if (command === 'avatar') {
        	if (args[0]) {
        		const user = getUserFromMention(args[0]);
        		if (!user) {
              consoleLog()
        			return message.channel.send('`Please mention them correctly, like this `@matsu3622`');
        		}

            const avatar = new Discord.MessageEmbed()
            .setColor('#4985e9')
            .setTitle(`${user.username}'s avatar:`)
            .setImage(`${user.displayAvatarURL({ dynamic: true })}`)
            .setTimestamp()
            .setFooter(message.author.tag)
            consoleLog()
          		return message.channel.send(avatar);

          	}
            const UserAvatar = new Discord.MessageEmbed()
            .setColor('#4985e9')
            .setTitle(`Your avatar:`)
            .setImage(`${message.author.displayAvatarURL({ dynamic: true })}`)
            .setTimestamp()
            .setFooter(message.author.tag)
            consoleLog()
          	return message.channel.send(UserAvatar);

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
                .setFooter(message.author.tag)
                .setDescription(randomTopic)
              message.channel.send(topicEmbed);
              consoleLog();
            }

            if (command === "spicy"){
              let pickup = topicArray.lines;
                const randomPickUp = pickup[Math.floor(Math.random() * 17)];
                try{
                  message.author.send(randomPickUp); //Tries to send the obj, which is in this case, randomPickup.
              } catch(err){
                  message.channel.send(randomPickup);
                  console.log("Something happened! Either their DMs were closed or it was an error."); //If an error occurs, it logs it into the console
              } finally{                                                                            //  and sends it to the guild-channel inside.
                  if (message.channel.type === 'text') {
                  message.channel.send("Sent you a spicy quote :black_heart:");  //Finally sends this message even if both cases fail.
                  consoleLog();
                } else return //This is only if the command was sent inside a guild-channel.
              }
            }

            if ((command === "convert") & (message.author.id === userID[0])) {
              const code = message.content.slice(9);
              try{
              eval(code) //This will convert the string to actual code that the bot can do. This bit of code is evil AND dangerous.
              consoleLog()
            } catch (err){
              message.channel.send("```javascript\n//Your code must be in Javascript.\n//Returning input.\n"+ code +"\n```")
              console.log("Failed conversion.")
            } finally {
              message.delete(message.author);
            }
          } //THIS IS SOLELY FOR DEBUGGING PURPOSES. If you are hosting this bot on your own, then I recommend that you secure your config.json file.
            //I am not responsible for any damages this command will do to your device. If you want to read more regarding the dangers of the eval()
            //function then go here: https://github.com/AnIdiotsGuide/discordjs-bot-guide/blob/master/examples/making-an-eval-command.md. If you don't
            //want this command, then you can remove it, granted you remove the whole if condition.


    });

client.login(config.BOT_TOKEN);
