const Discord = require('discord.js')


exports.run = async (client, message, args) => { 
  
  
  if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`**Hata :** Bu komutu sadece **Yöneticiler** kullanabilir.`)
  
let guild = message.guild;
  
  
    guild.fetchBans().then(bans => message.channel.send(`**${bans.size}**`)
                           
                           )
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
}

exports.help = {
    name: 'banlılar', 
  description: "",
  usage: ""
}

  

              