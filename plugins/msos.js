let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '❰ ⚠️ ❱ *Función Nsfw Desactivada*\n*Escriba #on nsfw para activar esta Función.*'
    heum = await fetch(`https://api-alc.herokuapp.com/api/chicas/muslos?&apikey=ConfuMods`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*AGROMOS SP and ConfuMods*\n*https://api-alc.herokuapp.com/api/chicas/muslos?&apikey=ConfuMods*', 'Agromos SP - Bot', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(muslitos)$/i

module.exports = handler
