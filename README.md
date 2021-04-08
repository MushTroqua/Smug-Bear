# Smug-Bear
Smug bear (Version 0.8.3) is a bot from Discord, a messaging app similar to Messenger(Facebook) and AOL(America Online).

## Goals

* To effectively have one bot do everything rather than a combination of other bots.
* To have minute control over features, and which to edit them to my own liking.

## Commands:

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

As of right now, there are two ways to use this bot. One, which is to host it on your own, or two which is invite it yourself via an invite link.
Since the bot is still private(there is a feature in Discord's Application Portal specifically for this option so even if you have an invite link, it still will be useless.) then the only option is to host it on your own. 

#### You can host your own version of Smug bear by:

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
Insert your bot token you got from Discord inside the "BOT_TOKEN" line. Make sure to remove "YOUR BOT TOKEN HERE" first! 
You might also notice a line called "userID". This is just for user-specifc responses from commands like *s!ping* and the bot's other commands so its not really necessary and you can safely ignore it altogether. If you want to however, access those, then you can do so by looking here https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID- and copy pasting the required IDs.

1. Open up your CMD prompt. You can find it by searching it on your Start menu.
1. Change the directory to your recently extracted folder. For example, mine would be `cd C:\\USERS\USER\Documents\Smug-Bear-Master`. This will be different for each user  If you want to know the directory of a folder then just right click on it then press "Properties". You'll see it in the Location line.
1. Run the command `npm i`. This will install all the required dependencies needed by the bot to run. It will probably take a couple of seconds.
1. Run `node bot.js`.


The bot should be up and running. You can check by running any of its command. I recommend doing **s!ping** or **s!help**

If you have any concerns/issues regarding anything bot-related, then feel free to open an issue in GitHub OR DM-ing me in Discord at matsu#3622.

#### Credits:
* CaptNBallEater - Icon
* Siopao - The idea for Smug Bear (Technically the owner of Smug Bear as they own the original icon for it kek)

***Disclaimer: I am not a great programmer nor an efficient one.***
