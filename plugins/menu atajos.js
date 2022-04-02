//7W7 PORFAVOR  DEJAME CREDITOS NO SEAS MALO XD
let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let vn = './media/atajos-bot.mp3'
let menu =`
╭━〘 💚⚡️💚⚡️💚⚡️💚⚡️💚 〙━╮
 ‖    ⚡ _*AGROMOS BOT SP_* ⚡
 ‖ 💚*¡𝗛ola! ${username}* 💚
 ‖
  ‖ Ⓜ️ *_MENÚ ATAJOS_* Ⓜ️
 ┏━━━━━━━━━━━━━┓
┃ *<GESTION DE ATAJOS ALOS COMANDOS/>* 
┃≡≡≡≡≡≡≡≡≡
┃ _menu de comandos_ *grupos*
┣ ➱♨️ _${usedPrefix}menugrupos_
┃≡≡≡≡≡≡≡≡≡
┃ _MENU DE COMANDOS_ *CREADOR*
┣ ➱♨️ _${usedPrefix}menucreador
┃≡≡≡≡≡≡≡≡≡
┃_MENU DE_ *INFORMACIÓN*
┣ ➱♨️ _${usedPrefix}minformacion
┃≡≡≡≡≡≡≡≡≡
┃ *MENU DE DESCARGAS*
┣ ➱♨️ _${usedPrefix}menudescargas
┃≡≡≡≡≡≡≡≡≡
┃ _MENU DE JUEGOS_
┣ ➱♨️ _${usedPrefix}menujuegos
┃≡≡≡≡≡≡≡≡≡
┃ _MENU DE COSAS_ *RANDOM*
┣ ➱♨️ _${usedPrefix}menurandom
┃≡≡≡≡≡≡≡≡≡
┃ *MENU DE* _CREACIONES_
┣ ➱♨️ _${usedPrefix}menucreaciones
┃≡≡≡≡≡≡≡≡≡
┃ *MENU  AUDIOS*
┣ ➱♨️ _${usedPrefix}menu2
┃≡≡≡≡≡≡≡≡≡
┃*MENU NOPOR🔞*
┣ ➱♨️ _${usedPrefix}labiblia
┗━━━━━━━━━━━━━┛
━〘 💚⚡💚⚡💚⚡💚⚡💚 〙━`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '𝐴𝐺𝑅𝑂𝑀𝑂𝑆 𝑆𝑃-𝐵𝑂𝑇', '𝙼𝙴𝙽𝚄 CREADOR', `#menucreador`, '𝙼ENU GRUPOS', `#menugrupos`, 'MENU DESCARGAS', `#menudescargas`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'atajos-bot.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(menunuevo)$/i
handler.fail = null
module.exports = handler
