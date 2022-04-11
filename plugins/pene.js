const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '❰ ⚠️ ❱ *Función Nsfw Desactivada*\n*Escriba #on nsfw para activar esta Función.*'
let res = await axios("https://meme-api.herokuapp.com/gimme/penis")
let json = res.data
let ShadowBot = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButtonImg(m.chat, ShadowBot, "*Pene 🍆*", 'Agromos SP - Bot', '🥵 SIGUIENTE 🥵', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(pene)$/i
module.exports = handler
