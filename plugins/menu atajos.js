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
┃  *menu de comandos grupos*
┣ ➱♨️ _${usedPrefix}menugrupos_
┃≡≡≡≡≡≡≡≡≡
┃  *MENU DE COMANDOS CREADOR*
┣ ➱♨️ _${usedPrefix}menucreador_
┃≡≡≡≡≡≡≡≡≡
┃ *MENU DE INFORMACIÓN*
┣ ➱♨️ _${usedPrefix}menuinformacion_
┃≡≡≡≡≡≡≡≡≡
┃ *MENU DE DESCARGAS*
┣ ➱♨️ _${usedPrefix}menudescargas_
┃≡≡≡≡≡≡≡≡≡
┃ *MENU DE JUEGOS*
┣ ➱♨️ _${usedPrefix}menujuegos_
┃≡≡≡≡≡≡≡≡≡
┃  *MENU DE COSAS RANDOM*
┣ ➱♨️ _${usedPrefix}menurandom_
┃≡≡≡≡≡≡≡≡≡
┃  *MENU DE CREACIONES*
┣ ➱♨️ _${usedPrefix}menucreaciones_
┃≡≡≡≡≡≡≡≡≡
┃ *MENU  AUDIOS*
┣ ➱♨️ _${usedPrefix}menu2_
┃≡≡≡≡≡≡≡≡≡
┃ *MENU NOPOR🔞*
┣ ➱♨️ _${usedPrefix}labiblia_
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
