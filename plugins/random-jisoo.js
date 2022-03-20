let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/jiso?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '🌸 *vive la vida como tu quieras*', 'agromos', '🔄 SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(jiso|jisso|jisoo|kimjisoo|)$/i
module.exports = handler
