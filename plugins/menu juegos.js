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
let vn = './media/juegos-bot.mp3'
let menu =`
╭━〘 💚⚡️💚⚡️💚⚡️💚⚡️💚 〙━╮
 ‖    ⚡ _*AGROMOS BOT SP_* ⚡
 ‖ 💚*¡𝗛ola! ${username}* 💚
 ‖
 ‖ Ⓜ️ *_MENÚ JUEGOS* Ⓜ️
 ┏━━━━━━━━━━━━━┓
┃ *<GESTION DE JUEGOS/>* 
┃≡≡≡≡≡≡≡≡≡
┃ *<JUEGOS/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡┣ 
➱💙 _${usedPrefix}math *modo*_
┣ ➱💛 _${usedPrefix}ttt *name del la sala*_
┣ ➱💙 _${usedPrefix}delttt *nombre del la sala*_
┣ ➱💛 _${usedPrefix}2gay *@tag*_
┣ ➱💙 _${usedPrefix}gay *@tag / nombre*_
┣ ➱💛 _${usedPrefix}lesbi *@tag / nombre*_
┣ ➱💙 _${usedPrefix}pajero *@tag / nombre*_
┣ ➱💛 _${usedPrefix}pajera *@tag / nombre*_
┣ ➱💙 _${usedPrefix}puta *@tag / nombre*_
┣ ➱💛 _${usedPrefix}puto *@tag / nombre*_
┣ ➱💙 _${usedPrefix}rata *@tag / nombre*_
┣ ➱💛 _${usedPrefix}manco *@tag / nombre*_
┣ ➱💙 _${usedPrefix}manca *@tag / nombre*_
┣ ➱💛 _${usedPrefix}formarpareja_┣ ➱💙 _${usedPrefix}dado
┣ ➱💙 _${usedPrefix}formartrio_
┣ ➱💛 _${usedPrefix}love *@tag / nombre*_
┣ ➱💙 _${usedPrefix}amigorandom_
┣ ➱💛 _${usedPrefix}slot *cantidad*_
┣ ➱💙 _${usedPrefix}ppt *piedra / papel / tijera*_
┣ ➱💛 _${usedPrefix}prostituta *@tag / nombre*_
┣ ➱💙 _${usedPrefix}prostituto *@tag / nombre*_ 
┗━━━━━━━━━━━━━┛
━〘 💚⚡💚⚡💚⚡💚⚡💚 〙━`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '𝐴𝐺𝑅𝑂𝑀𝑂𝑆 𝑆𝑃-𝐵𝑂𝑇', 'HOLA', `Hola`, '𝙼𝙴𝙽𝚄 INFORMACIÓN ', `#menuinformacion`, '𝙶𝚁𝚄𝙿𝙾 𝙾𝙵𝙸𝙲𝙸𝙰𝙻', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'juegos-bot.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(menugrupos)$/i
handler.fail = null
module.exports = handler
