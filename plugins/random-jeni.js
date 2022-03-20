let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/jeni?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '⭐ *Como las estrellas sobre las nubes*', 'Agromos sp', '🔄 SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(jeni|jenni|jennie|Jeni|Jenni)$/i
module.exports = handler
