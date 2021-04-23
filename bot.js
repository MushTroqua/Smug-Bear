const Discord = require("discord.js");
const config = require("./config.json");
const Gamedig = require("gamedig")
const client = new Discord.Client();
const help = require('./help.js');
const prefix = require('discord-prefix');

//==============BOOT-UP==============//
client.on('ready', async () => {
	var info = require('./package.json');
var clientVersion = info.version;
var packageName = info.author;
	console.log(clientVersion);
	console.log(packageName);
	client.user.setActivity("with these hands");
	console.log('All initialized and ready to fuck those motherfuckers up.');
});

//==============CODE==============//

let defaultPrefix = config.prefix;
client.on("message", function(message) {
	if (message.author.bot) return;
	let guildPrefix = prefix.getPrefix(message.guild.id);
		if (!guildPrefix) guildPrefix = defaultPrefix;
	if (message.mentions.has(client.user.id)){
		 message.channel.send(`**The prefix for this server is: \`${guildPrefix}\`**`)
		};
	if (!message.content.toLowerCase().startsWith(guildPrefix)) return;
	const commandBody = message.content.slice(guildPrefix.length);
	const args = commandBody.split(' ');
	const command = args.shift().toLowerCase();
	const userAuthor = message.author.toString();
	const topicArray = require('./topic.json');
	const userID = config.userID;
	const owner = message.author.id === userID[0];

	if (message.content.toLowerCase() === guildPrefix)
		return message.channel.send(`*Psst!* Try \`${guildPrefix}help\`!`);

	if (command === "prefix"){
		if (!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) return message.channel.send("**🚫 You don't have the necessary permissions to run this command 🚫**")
		const newPrefixArray = Array.from(message.content.split(" "));
		const newPrefix= newPrefixArray[1];
		const embed = new Discord.MessageEmbed()
		 .setTitle("Please provide the following arguements!")
		 .setDescription(`${guildPrefix}prefix *<your new prefix>*.`)
		 .setFooter("Requires KICK_MEMBERS and BAN_MEMBERS permission.")
		 try{
		prefix.setPrefix(newPrefix, message.guild.id)
		message.channel.send(`\`Your new prefix is now: ${newPrefix}.\``);
	} catch(err){
	message.channel.send(embed);
		}
	}
	function consoleLog() {
		try {
			let consoleLog = message.author.id + "/" + message.author.tag + " used " + message.content + " at " + message.guild.id + "/" + message.guild.name;
			console.log(consoleLog)
		} catch (err) {
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
		if (message.author.id === userID[1]) {
			message.channel.send(`Hello <@${userID[1]}>! This message had a latency of ${timeTaken}ms.`);
		} else {
			message.channel.send(`Pong, motherfucker. This message had a latency of ${timeTaken}ms.`);
		};
		consoleLog();
	}//This is the ping and pong command.


	if (command === 'help') {
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
			try{
			const user = getUserFromMention(args[0]);
			if (!user) {
				return message.channel.send(`*Please mention someone in this server.*`)
			}
			const mentionAvatar = new Discord.MessageEmbed() //emmbed for avatar command if there was someone mentioned
				.setTitle(`${user.username}'s avatar 📷`)
				.setDescription(`Download it here: 📥 [Avatar](${user.displayAvatarURL().replace('.png', '.webp')}+ '?size=2048')`)
				.setImage(user.displayAvatarURL().replace('.png', '.webp') + '?size=2048')
				.setTimestamp()
				.setFooter(message.author.tag)
			return message.channel.send(mentionAvatar)
		} catch (err){
			message.channel.send("There was an error doing this command... Showing yours instead.");
		}
		}
		const avatarEmbed = new Discord.MessageEmbed() //Embed for avatar command
			.setTitle(`Your avatar 📷`)
			.setDescription(` Download it here: 📥 [Avatar](${message.author.displayAvatarURL().replace('.png', '.webp')}?size=2048)`)
			.setImage(`${message.author.displayAvatarURL().replace('.png', '.webp')}?size=2048`)
			.setTimestamp()
			.setFooter(message.author.tag)
		consoleLog()
		return message.channel.send(avatarEmbed);

	} //Avatar command.

	if (message.content.includes('s!echo')) {
	consoleLog();
		if (message.channel.type === 'dm') return message.channel.send(`What are you doing, ${userAuthor}? You can't execute that here.`);
			message.delete(message.author);
			const embed = new Discord.MessageEmbed()
			.setTitle("Please provide the following arguements!")
			.setDescription(`${guildPrefix}echo *<Message to send>*`)
			.setFooter("Don't add <> or else the command won't work.")
			message.channel.send(message.content.slice(command.length + guildPrefix.length+1)).catch( ()=>message.channel.send(embed));

	} //An echo command. Returns your message so it looks like the bot is saying it.

	if (command === "random") {
		let math = Math.floor(Math.random() * 101);
		message.channel.send("<:game_die:820909565281042452>" + "Here's a random number:" + " [" + math + "]");
		consoleLog();
	} // Random number generator

	if (command === "topic") {
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

	if (command === "spicy") {
		consoleLog();
		let pickup = topicArray.lines;
		const randomPickUp = pickup[Math.floor(Math.random() * 17)];
		if (message.channel.type === 'text') {
			message.channel.send("Sent you a spicy quote :white_heart:");
			message.author.send("`" + randomPickUp + "`").catch(() => message.channel.send("`" + randomPickUp + "`"));//Tries to send randomPickup to DMs. If it's closed, it catches the error
		} else message.channel.send("`" + randomPickUp + "`")                                                //and sends it to the guild-channel instead.
	}

	if ((command === "eval") & (message.author.id === userID[0])) {
		const code = message.content.slice(command.length + guildPrefix.length + 1);
		try {
			eval(code) //This will convert the string to actual code that the bot can do. This bit of code is evil AND dangerous.
		} catch (err) {
			message.channel.send("```javascript\n//Your code must be in Javascript.\n//Returning input.\n" + code + "\n```")
			console.log("Failed conversion.")
		} finally {
			message.delete(message.author);
		}
		consoleLog()
	} //If you are hosting this bot on your own, then I recommend that you secure your config.json file.
	//I am not responsible for any damages this command will do to your device. If you want to read more regarding the dangers of the eval()
	//function then go here: https://github.com/AnIdiotsGuide/discordjs-bot-guide/blob/master/examples/making-an-eval-command.md. If you don't
	//want this command, then you can remove it, granted you remove the whole if condition.

	if (command === "math") {
		const Fraction = require('fractional').Fraction
		consoleLog()
		let commandArguement = Array.from(message.content.split(" ").slice(1));
		if (commandArguement.includes("arithmetic")) {
			let numbers = commandArguement.slice(1);
			let a = numbers[0];
			let b = numbers[1];
			let d = b - a;
			let n = numbers.length - 1;
			let x = Number(numbers[n]);
			let ans = x + d
			const arith = new Discord.MessageEmbed()
				.setTitle("Here you go...")
				.setAuthor("Arithmetic Series")
				.setThumbnail("https://imgur.com/hqMzDn9.png")
				.addFields(
					{ name: "First Term of the Sequence:", value: `[${a}]` },
					{ name: "Common Difference:", value: `[${d}]` },
					{ name: "The next value:", value: `[${ans}]` }
				)
				.setFooter(message.author.tag)
				.setTimestamp()
			message.channel.send(arith)
		}
		else if (commandArguement.includes("geometric")) {
			let numbers = commandArguement.slice(1);
			let x = numbers[0];
			let y = numbers[1];
			let r = y / x;
			let a = Number(numbers[numbers.length - 1]);
			let ans = a * r;
			const geom = new Discord.MessageEmbed()
				.setTitle("Here you go...")
				.setAuthor("Geometric Series")
				.setThumbnail("https://imgur.com/hqMzDn9.png")
				.addFields(
					{ name: "First Term of the Sequence:", value: "[" + x + "]" },
					{ name: "Ratio:", value: `[${r}] or [${new Fraction(y, x)}]` },
					{ name: "The next value:", value: `[${ans}] or [${new Fraction(ans)}]` }
				)
				.setFooter(message.author.tag)
				.setTimestamp()
			message.channel.send(geom)
		} else {
			message.channel.send(help.math)
		}
	}
	if(command === "cursed"){
		const cursed = topicArray.quotes[Math.floor(Math.random()*30)]
		message.channel.send(cursed)
	}
  if(command === "spam"){
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Oops! You don't have the necessary permissions!");
     let spamArguement = Array.from(message.content.slice(command.length + guildPrefix.length + 1).split(" "));
     let spamLastElement = spamArguement[spamArguement.length - 1];
     let spamNumber = Number(spamLastElement);
     var spamBeginning = 0;
     spamArguement.pop();
     consoleLog();
		 const embed = new Discord.MessageEmbed()
			.setTitle("Please provide the following arguements!")
			.setDescription(`${guildPrefix}spam *<Message to spam>* *<Amount>*`)
			.setFooter("Don't add <> or else the command won't work.")
        do{
          message.channel.send(spamArguement.join(" ")).catch(()=>message.channel.send(embed));
          spamBeginning++;
        }
      while(spamBeginning<spamNumber);
  }

	if(command === "minecraft"){
		const embed = new Discord.MessageEmbed()
		.setTitle("Showing Birdie's Bizzare Server:")
		.setThumbnail("https://imgur.com/9T4SWLu.png")
		.setFooter(message.author.tag + " | Player count does not say how many people are online.")
		.addFields(
			{name:"Domain:", value:"birdgod.mcserv.fun"},
			{name:"Mods:", value:"https://drive.google.com/drive/folders/12BapUqWVikrYt8Y8ntyi_lJVxk1QBI7N?usp=sharing"},
			{name:"Player Count:", value:"6/10"},
			{name:"Owner:", value:`MushTroqua`}
		)
		message.channel.send(embed);
		consoleLog();
	}
});

client.login(config.BOT_TOKEN);
