const Discord = require('discord.js');


exports.run = (client, message, args) => {
        
        if(!message.member.roles.cache.has("760511134423056464")) return message.channel.send("**Hata :** Bir kullanıcı yasaklamak için gereken role sahip değilsin.")
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('...')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('**Hata :** Bir kullanıcı etiketlemeyi unuttun.');

        if(!member) return message.channel.send('**Hata :** Kullanıcı bulunamadı.');
        if(!member.bannable) return message.channel.send('**Hata :** Bu kullanıcıyı yasaklayamam.');

        if(member.id === message.author.id) return message.channel.send('**Hata :** Kendini yasaklayamazsın.');

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'Belirtilmemiş';

        member.ban({reason:`${reason}`})
        .catch(err => {
            if(err) return message.channel.send('Bir şeyler yanlış gitti')
        })

        const banembed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Başarılı!')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Kullanıcı', member)
        .addField('Yetkili', message.author)
        .addField('Sebep', reason)
        .setFooter('Başarıyla sunucudan yasaklandı', client.user.displayAvatarURL())

        message.channel.send(banembed);


    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ban'],
    permLevel: 0
};

exports.help = {
    name: 'ban',
    description: 'Ban ',
    usage: 'ban'
};