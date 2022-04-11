let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix, command }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '❰ ⚠️ ❱ *Función Nsfw Desactivada*\n*Escriba #on nsfw para activar esta Función.*'
heum = await fetch(`https://api-alc.herokuapp.com/api/nsfw/yaoi?&apikey=ConfuMods`)
json = await heum.buffer()
conn.sendButtonImg(m.chat, json, '*Disfrutalo!!*', 'agromos sp - Bot', 'SIGUIENTE', `${usedPrefix + command}`, m, false)}
handler.command = /^(yaoi)$/i
module.exports = handler
