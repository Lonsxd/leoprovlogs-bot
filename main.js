const Discord = require('discord.js');

const client = new Discord.Client();

function presence(){
    client.user.setPresence({
        status: "online",
        activity: {
            name: "best bot ever 🤑",
            type: "PLAYING"
        }
    });
}

const prefix = '!';

const fs = require ('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.once('ready', ()  => {
    console.log('leoprovlogs bot is online!')
    presence();
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    if(command === 'bot'){
        client.commands.get('bot').execute(message, args)
    }
    if(command === 'miketeo'){
        client.commands.get('miketeo').execute(message, args)
    }
    if(command === 'hi'){
        client.commands.get('hi').execute(message, args)
    }
    if(command === 'yt'){
        client.commands.get('yt').execute(message, args)
    }
    if(command === 'fox'){
        client.commands.get('fox').execute(message, args)
    }
    
});

client.login(process.env.token);
