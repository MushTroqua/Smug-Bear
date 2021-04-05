# Smug-Bear
Smug bear (Version 0.8.1) is an all around discord bot built for a private discord server.

## Goals

* To effectively have one bot do everything rather than a combination of other bots.
* To have mynute control over features, and which to edit them to my own liking.

## Commands:
There isn't any features that aren't really that far off from any typical bot as of yet but here are the commands right now:

* **s!help** = Shows you the list of commands for Smug Bear!
* **s!ping** = Pong! Will give you the latency of the bot.
* **s!avatar** = Will get the url of your avatar and post it in the channel.
* **s!echo** = Repeats your message (Monke say, Smug Bear do!).
* **s!info** = Shows info about Smug Bear.
* **s!random** = Displays a random number.
* **s!topic** = Gives a random topic.
* **s!spicy** = DMs you a random and spicy pick-up line <3

## Planned Features:

* **Minecraft server status checker** = Will check the status of a minecraft server to see if it's offline or online. Mainly only for players of my minecraft server.

* **Gambling commands** = Something like Lawliet's (A discord bot known for its gambling commands) gambling with an economy.

* **Reply to set phrases** = Intended to reply to frequently said words of users in my server. Think Dad Bot.

* **Separate Command Module** = Allows you to activate a module to access the bot's moderator commands.

*This list will probably grow bigger once I get more creative/There are things which I can add that will make things more convenient for me*

## How to invite the bot to your own server?

As of right now, there are two ways to use this bot. One being to host it on your own, or two which is invite it.
Since, the bot is still private, then the only option is to host it on your own. You can host your own version of Smug bear by:

1. Go to Discord's developer portal by pressing this link https://discord.com/developers/applications
1. Press on New Application. You will be prompted to give it a name. You can name it whatever you want.
1. Go to your recently created application and press on "Bot" in Settings.
1. Press "Add Bot". You will receive a prompt stating that this action will be irrevocable. Press Yes. You'll be redirected to a screen where you'll see a Username, Icon, and a thing called Token with a blue markup which says "Click to Reveal Token".
1. Click on it and copy the string of numbers and text. Keep it snug and safe.
1. Going back to GitHub, clone this repository by pressing on Code at the top right corner, then press on "Download ZIP". Extract the folder anywhere you want.
1. Go to your newly extracted folder.
1. Before we continue, you need to create a file called "config.json" inside the folder. This is where we'll store our token that we got from Discord earlier which the bot needs to run.
1. Copy paste this specific code into your newly created file:
```json
  {
    "prefix":"s!",
    "BOT_TOKEN":"YOUR BOT TOKEN HERE",
    "userID":["USER-ID", "USER-ID"]
  }
```
Insert your bot token inside the "BOT_TOKEN" line. Make sure to remove "YOUR BOT TOKEN HERE" first! You might have also noticed the line called "userID". This is just for specific responses from commands like *s!ping* and the bot's debug commands so its not really necessary. You can  ignore this if you want. If you want to however, access those, then you can do so by looking here https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID- and copy pasting the required IDs. **Be warned however, that by accessing the debug commands, you are responsible for the safety of your machine. I will not be liable in any damage, machine or storage-wise.**
1. Open up your CMD prompt. You can find it by searching it on your Start menu.
1. Change the directory to your recently extracted folder. For example, mine would be `cd C:\\Smug-Bear`. This will be different for each user however.
If you want to know the directory of a folder then just right click on it then press "Properties". You'll see it in the Location line.
1. Run the command `npm i`. This will install all the required dependencies needed by the bot to run. It will probably take a couple of seconds.
1. After that, all you have to do is run `node bot.js`! We're done!

However this is all just to make the bot active. The bot isn't even in the server yet, you can generate an invite link for the bot by:
1. Go to OAuth2 in Discord's Developer portal.
1. You should see a check list called scopes. Look for "bot" and tick it.
1. If you scroll down, you should see a thing called "Bot Permissions". Give the bot the necessary permissions then go back to scopes.
1. You should see that it generated a link. Copy and paste it in any browser that you have.
1. Follow the prompts given.
1. Done!

The bot should be up and running. You can check by running any of its command. I recommend doing **s!ping** or **s!help**

If you have any concerns/issues regarding anything bot-related, then feel free to open an issue in GitHub OR DM-ing me in Discord at matsu#3622.

***Disclaimer: I am not a great programmer so expect shitty coding ;).***
