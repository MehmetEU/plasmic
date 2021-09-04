const Discord = require('discord.js');
exports.run = function(client, message) {

  
const yardım = new Discord.MessageEmbed()
.setColor('BLURPLE')
.setTitle(`Plasmic`)
.setDescription(`**Yakında bot tamamen açık olacaktır!**`)

.setThumbnail(message.author.avatarURL({dynamic: true}))
.setTimestamp()
message.reply(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'yardım kodu.',
  usage: 'yardım'
};