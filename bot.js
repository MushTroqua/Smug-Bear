const Discord = require("discord.js");
const config = require("./config.json");
const Gamedig = require("gamedig")
const client = new Discord.Client();
const help = require('./help.js');

//==============BOOT-UP==============//
  client.on('ready', async () => {
    const info = require('./package.json');
    var version = info.version;
    var name = info.author;
      console.log(version);
      console.log(name);
      client.user.setActivity("with these hands");
      console.log('All initialized and ready to fuck those motherfuckers up.');
  });

//==============CODE==============//

    const prefix = config.prefix;
        client.on("message", function(message) {
          if (message.author.bot) return;
          if (!message.content.toLowerCase().startsWith(prefix)) return;
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
          };  //function used to log all the command used by whom and where.

          if (command === "info") {
            message.channel.send(help.github);
          consoleLog();
        } //Info command.


          if (command === "ping") {
            const timeTaken = Date.now() - message.createdTimestamp;
              if (message.author.id === userID[1]){
                  message.channel.send(`Hello Master! This message had a latency of ${timeTaken}ms.`);
              } else {
                  message.channel.send(`Pong, motherfucker. This message had a latency of ${timeTaken}ms.`);
                };
                consoleLog();
          }//This is the ping and pong command.


          if (command === 'help'){
            message.channel.send(help.page);
            consoleLog();
          }//This is the help command.


        function getUserFromMention(mention) {
        	if (!mention) return;

        	if (mention.startsWith('<@') && mention.endsWith('>')) {
        		mention = mention.slice(2, -1); //removes <@! and > ex. from <@!000000000000000000> to 000000000000000000

        		if (mention.startsWith('!')) {
        			mention = mention.slice(1);
        		}

        		return client.users.cache.get(mention);
        	}
        } //Gets the data of the mentioned user based on their ID from the guild's cache.

        if (command === 'avatar') {
          consoleLog()
        	if (args[0]) {
        		const user = getUserFromMention(args[0]);
        		if (!user) {
        			return message.channel.send(`Please mention them correctly, like this: ${userAuthor} (@nickname).`);
        		}
            const avatar = new Discord.MessageEmbed() //emmbed for avatar command if there was someone mentioned
            .setColor('#4985e9')
            .setTitle(`${user.username}'s avatar:`)
            .setImage(`${user.displayAvatarURL({ dynamic: true })}`)
            .setTimestamp()
            .setFooter(message.author.tag)
          	return message.channel.send(avatar);
          	}
            const UserAvatar = new Discord.MessageEmbed() //Embed for avatar command
            .setColor('#4985e9')
            .setTitle(`Your avatar:`)
            .setImage(`${message.author.displayAvatarURL({ dynamic: true })}`)
            .setTimestamp()
            .setFooter(message.author.tag)
            consoleLog()
          	return message.channel.send(UserAvatar);

          } //Avatar command.

            if (message.content.includes('s!echo')) {
              try {
                if (message.channel.type === 'dm') throw message.channel.send(`What are you doing, ${userAuthor}? You can't execute that here.`);
                  message.channel.send(message.content.replace('s!echo',''));
                  message.delete(message.author);
                  consoleLog();
              }catch(err) {
              console.log("Error in doing " + message.content);
            }
          } //An echo command. Returns your message so it looks like the bot is saying it.

            if (command === "random"){
              let math = Math.floor(Math.random() * 101);
              message.channel.send("<:game_die:820909565281042452>" + "Here's a random number:" + " [" + math + "]");
              consoleLog();
            } // Random number generator

            if (command === "topic"){
              let topic = topicArray.topic; //Gets the topic array from a json file.
              let emoji = topicArray.emojis; // Same here but for the emojis.
              var randomEmoji = emoji[Math.floor(Math.random() * 18)]; //Same formula used by the random number generator but is used to get a topic from the array.
              var randomTopic = topic[Math.floor(Math.random() * 58)]; //same here.
              const topicEmbed = new Discord.MessageEmbed()
                .setColor('#4985e9')
                .setTitle(randomEmoji + " Showing a topic. " + randomEmoji)
                .setTimestamp()
                .setFooter(message.author.tag)
                .setDescription(randomTopic)
              message.channel.send(topicEmbed);
              consoleLog();
            } //Topic command which gets a random topic from an array in a json file.

            if (command === "spicy"){
              consoleLog();
              let pickup = topicArray.lines;
                const randomPickUp = pickup[Math.floor(Math.random() * 17)];
                  if (message.channel.type === 'text') {
                  message.channel.send("Sent you a spicy quote :white_heart:");
                  message.author.send("`"+randomPickUp+"`").catch(()=> message.channel.send("`"+randomPickUp+"`"));//Tries to send randomPickup to DMs. If it's closed, it catches the error
                } else message.channel.send("`"+ randomPickUp +"`")                                                //and sends it to the guild-channel instead.
              }

            if ((command === "eval") & (message.author.id === userID[0])) {
              const code = message.content.slice(command.length + prefix.length);
              try{
              eval(code) //This will convert the string to actual code that the bot can do. This bit of code is evil AND dangerous.
            } catch (err){
              message.channel.send("```javascript\n//Your code must be in Javascript.\n//Returning input.\n"+ code +"\n```")
              console.log("Failed conversion.")
            } finally {
              message.delete(message.author);
            }
          } //If you are hosting this bot on your own, then I recommend that you secure your config.json file.
            //I am not responsible for any damages this command will do to your device. If you want to read more regarding the dangers of the eval()
            //function then go here: https://github.com/AnIdiotsGuide/discordjs-bot-guide/blob/master/examples/making-an-eval-command.md. If you don't
            //want this command, then you can remove it, granted you remove the whole if condition.

          if (command === "math"){
            consoleLog()
          let mContent = Array.from(message.content.split(" ").slice(1));
            if (mContent.includes("arithmetic")) {
              let numbers = mContent.slice(1);
              let a = numbers[0];
              let b = numbers[1];
              let d = b-a;
              let n = numbers.length-1;
              let x = Number(numbers[n]);
              let ans = x + d
              const arith = new Discord.MessageEmbed()
              .setTitle("Here you go...")
              .setAuthor("Arithmetic Series")
              .setThumbnail("https://imgur.com/hqMzDn9.png")
              .addFields(
                {name:"First Term of the Sequence:", value:"["+a+"]"},
                {name:"Common Difference:", value:"["+d+"]"},
                {name:"The next value:", value:"["+ans+"]"}
              )
              .setFooter(message.author.tag)
              .setTimestamp()
              message.channel.send(arith)
            }
            else if (mContent.includes("geometric")) {
              let numbers = mContent.slice(1);
              let x = numbers[0];
              let y = numbers[1];
              let r = y/x;
              let a = Number(numbers[numbers.length - 1]);
              let ans = a*r;
              const geom = new Discord.MessageEmbed()
              .setTitle("Here you go...")
              .setAuthor("Geometric Series")
              .setThumbnail("https://imgur.com/hqMzDn9.png")
              .addFields(
                {name:"First Term of the Sequence:", value:"["+x+"]"},
                {name:"Ratio:", value:"["+r+"]"},
                {name:"The next value:", value:"["+ans+"]"}
              )
              .setFooter(message.author.tag)
              .setTimestamp()
                message.channel.send(geom)
            } else{
              message.channel.send(help.math)
            }
          }

    });

client.login(config.BOT_TOKEN);
