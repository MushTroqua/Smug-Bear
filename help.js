const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed, Collection } = require('discord.js');
        const page = new Discord.MessageEmbed()
              .setColor('#4985e9')
              .setTitle("Here you go.")
              .setAuthor("Smug Bear","https://cdn.discordapp.com/emojis/756556429078560798.png?v=1")
              .addFields(
                { name:'s!help', value:'Displays this page.' },
                { name:'s!ping', value:'Pong! Shows the latency of the bot.'},
                { name:'s!avatar', value:'Shows your avatar.'}
              )

exports.page = page;
