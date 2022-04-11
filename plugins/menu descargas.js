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
let vn = './media/descargas-bot.mp3'
let menu =`
╭━〘 💚⚡️💚⚡️💚⚡️💚⚡️💚 〙━╮
 ‖    ⚡ _*AGROMOS BOT SP_* ⚡
 ‖ 💚*¡𝗛ola! ${username}* 💚
 ‖
 ‖ Ⓜ️ *_MENÚ DESCARGAS_* Ⓜ️
 ┏━━━━━━━━━━━━━┓
┃ *<GESTION DE DESCARGAS/>* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *<DESCARGAS/>*┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ➱🔹️ _${usedPrefix}ytcomment_
┣ ➱🔹️ _${usedPrefix}imagen *texto*_
┣ ➱🔸️ _${usedPrefix}ytsearch *texto*_
┣ ➱🔹️ _${usedPrefix}dlaudio *link yt*_
┣ ➱🔸️ _${usedPrefix}dlvid *link yt*_
┣ ➱🔹️ _${usedPrefix}ytmp3 *link yt*_
┣ ➱🔸️ _${usedPrefix}ytmp4 *link yt*_
┣ ➱🔹️ _${usedPrefix}ytmp4.2 *link yt*_
┣ ➱🔸️ _${usedPrefix}play *titulo del audio*_
┣ ➱🔹️ _${usedPrefix}play2 *titulo del video*_
┣ ➱🔸️ _${usedPrefix}play3 *titulo del audio/video*_
┣ ➱🔹️ _${usedPrefix}play4 *titulo del video*_
┣ ➱🔸️ _${usedPrefix}letra *nombredelacanción*_
┣ ➱🔹️ _${usedPrefix}google *texto*_
┣ ➱🔸️ _${usedPrefix}googlef *texto*_
┣ ➱🔹️ _${usedPrefix}wikipedia *palabra clave*_
┣ ➱🔸️ _${usedPrefix}pinterestvideo *link de pinterest*_
┣ ➱🔹️ _${usedPrefix}tiktokaudio *link del tiktok*_
┣ ➱🔸️ _${usedPrefix}tiktok *link*_
┣ ➱🔹️ _${usedPrefix}spotify *autor, cancion*_
┣ ➱🔸️ _${usedPrefix}acortar *link*_
┣ ➱🔹️ _${usedPrefix}pinterest *texto*_
┣ ➱🔸️ _${usedPrefix}xnxx *link de xnxx*_
┣ ➱🔹️ _${usedPrefix}xnxxsearch *texto*_
┣ ➱🔸️ _${usedPrefix}ssweb *link*_
┣ ➱🔹️ _${usedPrefix}igstory *username*_
┣ ➱🔸️ _${usedPrefix}igstalk *username*_
┣ ➱🔹️ _${usedPrefix}animeinfo *nombre del anime*_
┣ ➱🔸️ _${usedPrefix}twvid *link de video de twitter*_
┏━━━━━━━━━━━━━┓
┃  *_DESCARGAS MEDIAFIRE_*
║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ 
┣ ➱📥 _${usedPrefix}mediafire_
┗━━━━━━━━━━━━━┛
━〘 💚⚡💚⚡💚⚡💚⚡💚 〙━`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '𝐴𝐺𝑅𝑂𝑀𝑂𝑆 𝑆𝑃-𝐵𝑂𝑇', '💚HOLA💚', `Hola`, 'NO DIGAS MAMADAS MERIYEIN', `No digas mamadas`, '𝙶𝚁𝚄𝙿𝙾 𝙾𝙵𝙸𝙲𝙸𝙰𝙻', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'descargas-bot.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(menudescargas)$/i
handler.fail = null
module.exports = handler
