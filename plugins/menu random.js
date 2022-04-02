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
let vn = './media/cosas-random.mp3'
let menu =`
╭━〘 💚⚡️💚⚡️💚⚡️💚⚡️💚 〙━╮
 ‖    ⚡ _*AGROMOS BOT SP_* ⚡
 ‖ 💚*¡𝗛ola! ${username}* 💚
 ‖
 ‖ Ⓜ️ *_MENÚ RAMDOM_* Ⓜ️
 ┏━━━━━━━━━━━━━┓
┃ *<GESTION DEL RAMDOM/>* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
"┃ *<RANDOM|EXTRAS/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ➱💎 _${usedPrefix}doremon_
┣ ➱⚜ _${usedPrefix}yeni_
┣ ➱💎 _${usedPrefix}jiso_
┣ ➱⚜ _${usedPrefix}pugb_
┣ ➱💎 _${usedPrefix}rose_
┣ ➱⚜ _${usedPrefix}fondogaming_
┣ ➱💎 _${usedPrefix}fondoaesthetic_
┣ ➱⚜ _${usedPrefix}fondomontaña_
┣ ➱💎 _${usedPrefix}frase_
┣ ➱⚜ _${usedPrefix}futbol_
┣ ➱💎 _${usedPrefix}Messi_
┣ ➱⚜ _${usedPrefix}animal_
┣ ➱💎 _${usedPrefix}meme_
┣ ➱⚜ _${usedPrefix}meme2_
┣ ➱💎 _${usedPrefix}meme3_
┣ ➱⚜ _${usedPrefix}cat_
┣ ➱💎 _${usedPrefix}dog_
┣ ➱⚜ _${usedPrefix}pikachu_
┣ ➱💎 _${usedPrefix}waifu_
┣ ➱⚜ _${usedPrefix}blackpink_
┣ ➱💎 _${usedPrefix}reto_
┣ ➱⚜ _${usedPrefix}verdad_
┣ ➱💎 _${usedPrefix}imagenrandom_
┣ ➱⚜ _${usedPrefix}neko_
┣ ➱💎 _${usedPrefix}lolivid_
┣ ➱⚜ _${usedPrefix}iqtest_
┣ ➱⚜ _${usedPrefix}kpopitzy_
┣ ➱💎 _${usedPrefix}navidad_
┣ ➱⚜ _${usedPrefix}loli_
┣ ➱💎 _${usedPrefix}gawrgura_
┣ ➱⚜ _${usedPrefix}miku_
┣ ➱💎 _${usedPrefix}nyan_
┣ ➱💎 _${usedPrefix}pat_
┣ ➱⚜ _${usedPrefix}itachi_
┣ ➱💎 _${usedPrefix}slap_
┣ ➱⚜ _${usedPrefix}pat_
┣ ➱💎 _${usedPrefix}perfil_
┣ ➱⚜ _${usedPrefix}scan_
┣ ➱💎 _${usedPrefix}kpop_
┣ ➱⚜ _${usedPrefix}qr *texto*_
┣ ➱💎 _${usedPrefix}afk *motivo*_
┣ ➱⚜ _${usedPrefix}CristianoRonaldo_
┣ ➱💎 _${usedPrefix}pregunta *pregunta*_
┣ ➱⚜ _${usedPrefix}mention *texto*_
┣ ➱💎 _${usedPrefix}spamchat *texto*_
┣ ➱⚜ _${usedPrefix}traducir es *texto*_
┣ ➱💎 _${usedPrefix}zodiac *AAAA MM DD*_
┣ ➱⚜ _${usedPrefix}readmore *texto1| texto2*_
┣ ➱💎 _${usedPrefix}calc *expresión matemática*_ 
┣ ➱⚜ _${usedPrefix}spamwa *numero|texto|cantidad*_
┣ ➱💎 _${usedPrefix}readqr *responde a un código QR*_
┣ ➱⚜ _${usedPrefix}anime *random / waifu / husbu /neko*_"
 ┣ ➱💎 _${usedPrefix}subirestado *texto / responder video, imagen o gif*_
┗━━━━━━━━━━━━━┛
━〘 💚⚡💚⚡💚⚡💚⚡💚 〙━`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '𝐴𝐺𝑅𝑂𝑀𝑂𝑆 𝑆𝑃-𝐵𝑂𝑇', '𝙼𝙴𝙽𝚄 JUEGOS', `#menujuegos`, 'JAJAJA', `Jajaja`, '𝙶𝚁𝚄𝙿𝙾 𝙾𝙵𝙸𝙲𝙸𝙰𝙻', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'cosas-random.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(menurandom)$/i
handler.fail = null
module.exports = handler
