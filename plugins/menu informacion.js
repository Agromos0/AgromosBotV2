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
let vn = './media/menu-informacion.mp3'
let menu =`
╭━〘 💚⚡️💚⚡️💚⚡️💚⚡️💚 〙━╮
 ‖    ⚡ _*AGROMOS BOT SP_* ⚡
 ‖ 💚*¡𝗛ola! ${username}* 💚
 ‖
 ‖ Ⓜ️ *_MENÚ INFORMACION_* Ⓜ️
 ┏━━━━━━━━━━━━━┓
┃ *<INFORMACIÓN|MENUS/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ➱🔰 _${usedPrefix}sc_┣ 
┣ ➱🔰 _${usedPrefix}donar_
┣ ➱🔰 _${usedPrefix}infobot_
┣ ➱🔰 _${usedPrefix}grupos_
┣ ➱🔰 _${usedPrefix}instalarbot_
┣ ➱🔰 _${usedPrefix}menusimple_
┣ ➱🔰 _${usedPrefix}menuaudios_
┣ ➱🔰 _${usedPrefix}menu2_
┣ ➱🔰 _${usedPrefix}labiblia_
┣ ➱🔰 _${usedPrefix}estado_
┣ ➱🔰 _¿Qué es un Bot?_
┣ ➱🔰 _Codigos para audios_
┣ ➱🔰 _Términos y condiciones_
║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 
┃ *IMPORTANTE*
┣ ➬❗ _${usedPrefix}reglas_
┣ ➱🔰_${usedPrefix}Bot
║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 
┃ *Reportar fallas*
┣ ➬⛔ _${usedPrefix}bug *comando con fallas*_
┣ ➬⛔ _${usedPrefix}report *comando con fallas*_
┃ *instalar el bot agromos*
┃➱♻️ _${usedPrefix}instalarbot_
║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 
║*agregar al bot atu grupo*
┣ ඬ⃟🤖 _${usedPrefix}join *link del grupo*_ 
┣ ඬ⃟🤖 _${usedPrefix}bots_
║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 
║ *ser sub bot*
┣ ➱💚 _${usedPrefix}stop_
┣ ➱💚 _${usedPrefix}jadibot_
┣ ➱💚 _${usedPrefix}getcode_
┗━━━━━━━━━━━━━┛
━〘 💚⚡💚⚡💚⚡💚⚡💚 〙━`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '𝐴𝐺𝑅𝑂𝑀𝑂𝑆 𝑆𝑃-𝐵𝑂𝑇', 'MENU CREADOR', `#menucreador`, '𝙼𝙴𝙽𝚄 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚂 ', `#menudescargas`, 'La BIBLIA', `#labiblia`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'menu-informacion.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(menuinformacion)$/i
handler.fail = null
module.exports = handler
