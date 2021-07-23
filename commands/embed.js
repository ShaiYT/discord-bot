const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('HTS')
            .setTitle('HTS')
            .setDescription('[lien du discord](https://discord.gg/mJjrT9pK2Z) **go join !**')
            .setColor('RANDOM')
            .addField('Lien d\'invitation du bot', 'https://discord.com/oauth2/authorize?client_id=867814951380844564&scope=bot&permissions=8', true)
            .addField('Lien du discord', 'https://discord.gg/mJjrT9pK2Z', true)
            .addField('Créatrice du bot et de la team', '💜~Shai~💜#6969', true)
            .setAuthor('Shai', '', 'https://discord.gg/mJjrT9pK2Z')
            .setImage('https://cdn.discordapp.com/attachments/867806122608951336/867829437084074024/unknown.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/867806122608951336/867829437084074024/unknown.png')
            .setFooter('HTS best hacking team.', 'https://cdn.discordapp.com/attachments/867806122608951336/867829437084074024/unknown.png')
            .setTimestamp()
            .setURL('https://discord.gg/mJjrT9pK2Z'))
    },
    name: 'embed'
}