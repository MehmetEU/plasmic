const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (client, message, args) => {
  
  if(!message.member.roles.cache.has("760511134423056464")) return message.channel.send("**Hata :** Bir kullanıcı yasaklamak için gereken role sahip değilsin.")  
  

  let user = args[0];
  let reason = args.slice(1).join(' ');
 if (isNaN(user)) return message.channel.send('**Hata :** Lütfen bir ID giriniz.');
  if (reason.length < 1) return message.channel.send('**Hata :** Neden affettiğinizi belirtiniz.');
 
  
  const embed = new Discord.MessageEmbed()
  .setColor("YELLOW")
  .addField('Üye', `<@${user}>`)
  .addField('Yetkili', `<@${message.author.username}#${message.author.discriminator}>`)
  .addField('Affedilme nedeni', "```" + reason + "```")
  client.channels.cache.get('').send(embed)///LOG KANAL İD YAZMALISIN
  message.guild.members.unban(user);

  message.channel.send("Etiketlenen kullanıcının yasağını başarıyla kaldırdım, tekrardan sunucuya giriş yapabilir.")

  
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['unban',"uban","bank"],
    permLevel: 0
};

exports.help = {
    name: 'ban-kaldır',
    description: 'unban',
    usage: 'unban'
};
