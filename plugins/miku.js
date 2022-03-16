let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/miku?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Hatsune Miku*', '𝐴𝐺𝑅𝑂𝑀𝑂𝑆 𝑆𝑃-𝐵𝑂𝑇', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(micu|miku)$/i

module.exports = handler
