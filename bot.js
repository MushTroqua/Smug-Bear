const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

client.on('ready', async () => {
        console.log('Ready to fuck those motherfuckers up.');
    
});
    
    const prefix = "s!";
        client.on("message", function(message) {
          if (message.author.bot) return;
          if (!message.content.startsWith(prefix)) return;
            
        const commandBody = message.content.slice(prefix.length);
        const args = commandBody.split(' ');
        const command = args.shift().toLowerCase();
            
        //This is the ping and pong command. Pretty standard.
            if (command === "ping") {
            const timeTaken = Date.now() - message.createdTimestamp;
                message.channel.send(`Pong, motherfucker. This message had a latency of ${timeTaken}ms.`); 
            }
            
        //This is the display avatar command.
            const embed = new Discord.MessageEmbed()
                .setColor('#4985e9')
                .setTitle('🖼Avatar🖼')
                .setImage(message.author.avatarURL())
            
             if (command === 'avatar') {
            message.channel.send(embed);
            }     
            
        });

client.login(config.BOT_TOKEN);
