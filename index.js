const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(
    `Az Önce Bot Ping yedi, Sorun önemli değil merak etme. Hatayı düzelttik.`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const moment = require("moment");
moment.locale("tr")
const chalk = require("chalk");
require("./util/eventLoader")(client);

const log = message => {
  console.log(`[BOT]: ${message}`);
};

client.ayarlar = {
  prefix: ".",
  sahip: "725788906418733096",
  token: "ODMwMDk3NjU4MDIyMzMwMzg4.YHBusA.d97d2k4ZhJc1_0luj821v2SoJ1s"
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`[BOT]: ${props.help.name} yüklendi`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.on("message", msg => {
  let e = client.ayarlar.reklamengel
  if(e === "aktif"){  
        const reklam = ["http://","https://","http",".com","www","discord.gg","gg/"];
          if (reklam.some(word => msg.content.includes(word))) {
            try {
              if (!msg.member.hasPermission("BAN_MEMBERS")) {
                    msg.delete();
                           const batusuyar = new Discord.MessageEmbed()
  .setColor(client.embed.renk)
  .setTitle("LİNK ENGEL")
  .setDescription(`Bu sunucuda link paylaşmak yasak eğer linkinin bir reklam içermediğini düşünüyorsan bir yetkiliye bu hatayı bildir.`)
  .setFooter(client.embed.footer)                   
      
                      return msg.channel.send(batusuyar).then(msg => msg.delete({ timeout: 5000 }));
     
   
    msg.delete(3000);                              
   
              }              
            } catch(err) {
              console.log(err);
            }
          }}
  else return;
      });







client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === client.ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

    client.on("ready",() => {
      console.log(`[BOT]: ${client.user.username} olarak giriş yaptım.`);
      var randomMesajlar = ["Güncel | .yardım","Ğ"]
      setInterval(function() {
          var randomMesajlar1 = randomMesajlar[Math.floor(Math.random() * (randomMesajlar.length))]
          client.user.setActivity(`${randomMesajlar1}`);}, 3 * 30000);
      client.user.setStatus("idle");
      })
    

client.login(client.ayarlar.token);

/////////////////Sa-As
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "sa") {
    msg.reply(
      "Aleyküm selam."
    );
  }
});



//HG MESAJI