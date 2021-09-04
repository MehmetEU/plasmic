const Discord = require('discord.js');

exports.run = (client, message, args) => {


    if(!message.member.roles.cache.has("760511134423056464")) return message.channel.send("**Hata :** Bir kullanıcı atmak için gereken role sahip değilsin.")
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('...')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('**Hata :** Bir kullanıcı etiketlemeyi unuttun.');

        if(!member) return message.channel.send('**Hata :** Kullanıcı bulunamadı.');
        if(!member.kickable) return message.channel.send('**Hata :** Bu kullanıcıyı atamam.');

        if(member.id === message.author.id) return message.channel.send('**Hata :** Kendini atamazsın.');

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'Belirtilmemiş';

        member.kick(reason)
        .catch(err => {
            if(err) return message.channel.send('Bir şeyler yanlış gitti')
        })

        const kickembed = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .setTitle('Başarılı!')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Kullanıcı', member)
        .addField('Yetkili', message.author)
        .addField('Sebep', reason)
        .setFooter('Başarıyla atıldı', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(kickembed);


    }
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kick'],
    permLevel: 0
};

exports.help = {
    name: 'kick',
    description: 'kick ',
    usage: 'kick'
};