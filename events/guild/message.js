require('dotenv').config();

const cooldowns = new Map();
module.exports = (Discord, client, message, permissions) => {

    const prefix = process.env.PREFIX
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
  
    
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;
   

    try {
        command.execute(message,args, cmd, client, Discord)
    } catch (err) {
        //message.reply('Non riesco a trovare il comando!');
        //console.log(err);
    }
}