const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed, Collection } = require('discord.js');
const message = new Discord.Message();
const info = require('./package.json')

        const page = new Discord.MessageEmbed()
              .setColor('#4985e9')
              .setTitle("Here you go.")
              .setAuthor("Smug Bear","https://cdn.discordapp.com/emojis/756556429078560798.png?v=1")
              .setTimestamp()
              .addFields(
                { name:'s!help', value:'Displays this page.' },
                { name:'s!ping', value:'Pong! Gives you the latency of the bot.'},
                { name:'s!avatar', value:'Shows your avatar in a neat embed.'},
                { name:'s!echo', value:'Repeats your message (Monke say, Smug Bear do!)'},
                { name:'s!random', value:'Pulls a random number from 0-100.'},
                { name:'s!topic', value:'Can\'t think of a topic? Let Smug Bear do it for you!'},
                { name:'s!spicy', value:'The bot will DM you a spicy pick-up line *(Open your DMs or it\'ll just send it to the channel you\'re in rn)*'},
                { name:'s!info', value:'Shows info about Smug Bear like version number, etc.'}
              )

              const github = new Discord.MessageEmbed()
              .setColor('#4985e9')
              .setAuthor("Smug Bear","https://cdn.discordapp.com/emojis/756556429078560798.png?v=1")
              .setTimestamp( )
              .setTitle('Giving you all the info for Smug Bear')
              .setThumbnail("https://cdn.discordapp.com/emojis/780429200120479784.png?v=1")
              .addFields(
              {name:"Version:", value:info.version},
              {name:"Created by:", value:info.author},
              {name:"Icon created by:", value:"CaptNBallEater"},
              {name:"GitHub:", value:info.homepage}
              )

exports.page = page;
exports.github = github;
