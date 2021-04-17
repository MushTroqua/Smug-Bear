const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed, Collection } = require(`discord.js`);
const message = new Discord.Message();
const info = require(`./package.json`)
const config = require('./config.json')

        const page = new Discord.MessageEmbed()
              .setColor(`#4985e9`)
              .setTitle("Here you go.")
              .setAuthor("Smug Bear","https://cdn.discordapp.com/emojis/756556429078560798.png?v=1")
              .setTimestamp()
              .addFields(
                { name:`${config.prefix}help`, value:`Displays this page.`, inline:true },
                { name:`${config.prefix}ping`, value:`Pong! Gives you the latency of the bot.`, inline:true},
                { name:`${config.prefix}avatar`, value:`Shows your avatar in a neat embed.`, inline:true},
                { name:`${config.prefix}echo`, value:`Repeats your message (Monke say, Smug Bear do!)`, inline:true},
                { name:`${config.prefix}random`, value:`Pulls a random number from 0-100.`, inline:true},
                { name:`${config.prefix}topic`, value:"Can\`t think of a topic? Let Smug Bear do it for you!", inline:true},
                { name:`${config.prefix}spicy`, value:"The bot will DM you a spicy pick-up line ;-)", inline:true},
                { name:`${config.prefix}info`, value:"Shows info about Smug Bear like version number, etc.", inline:true},
								{ name:`${config.prefix}math`, value:"Calculate, and be big brain. Do `s!math` for more info.", inline:true}
              )

              const github = new Discord.MessageEmbed()
              .setColor(`#4985e9`)
              .setAuthor("Smug Bear","https://cdn.discordapp.com/emojis/756556429078560798.png?v=1")
              .setTimestamp( )
              .setTitle(`Giving you all the info for Smug Bear`)
              .setThumbnail("https://cdn.discordapp.com/emojis/780429200120479784.png?v=1")
              .addFields(
              {name:"Version:", value:info.version},
              {name:"Created by:", value:info.author},
              {name:"Icon created by:", value:"CaptNBallEater"},
              {name:"GitHub:", value:info.homepage}
              )

              const mathHelp = new Discord.MessageEmbed()
              .setColor(`#4985e9`)
              .setAuthor("Smug Bear","https://cdn.discordapp.com/emojis/756556429078560798.png?v=1")
              .setThumbnail("https://imgur.com/hqMzDn9.png")
              .setTimestamp()
              .setTitle("Hey there buddy!")
              .setDescription("**You have to provide the following arguements:**")
              .addFields(
                {name:"Type:", value:"Arithmetic, Geometric."},
                {name:"Number:", value:"No fractions(1 2 3 4)"},
                {name:"*Example:*", value:`*${config.prefix}math Geometric 1 2 3 4 5*`}
              )

exports.page = page;
exports.github = github;
exports.math = mathHelp;