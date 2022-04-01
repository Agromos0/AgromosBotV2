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
let vn = './media/bienvenido-menu-creador.mp3'
let menu =`
╭━〘 💚⚡️💚⚡️💚⚡️💚⚡️💚 〙━╮
 ‖    ⚡ _*AGROMOS BOT SP_* ⚡
 ‖ 💚*¡𝗛ola! ${username}* 💚
 ‖
 ‖ Ⓜ️ *_MENÚ CREADOR_* Ⓜ️
 ┏━━━━━━━━━━━━━┓
┃ *<GESTION DEL CREADOR/>* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *<PROPIETARO DEL BOT/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ➱👑 _${usedPrefix}boost_
┣ ➱👑 _${usedPrefix}restart_
┣ ➱👑 _${usedPrefix}banlist_
┣ ➱👑 _${usedPrefix}binario1_
┣ ➱👑 _${usedPrefix}binario2_
┣ ➱👑 _${usedPrefix}banchat2_
┣ ➱👑 _${usedPrefix}actualizar_
┣ ➱👑 _${usedPrefix}CajaFuerte_
┣ ➱👑 _${usedPrefix}unbanchat2_
┣ ➱👑 _${usedPrefix}bc *texto*_
┣ ➱👑 _${usedPrefix}bcgc *texto*_
┣ ➱👑 _${usedPrefix}bcbot *texto*_
┣ ➱👑 _${usedPrefix}setbye *@tag*_
┣ ➱👑 _${usedPrefix}banuser *@tag*_
┣ ➱👑 _${usedPrefix}enable *public*_
┣ ➱👑 _${usedPrefix}disable *public*_
┣ ➱👑 _${usedPrefix}unbanuser *@tag*_
┣ ➱👑 _${usedPrefix}listgroup *@tag*_
┣ ➱👑 _${usedPrefix}enable *restrict*_
┣ ➱👑 _${usedPrefix}enable *autoread*_
┣ ➱👑 _${usedPrefix}setwelcome *@tag*_
┣ ➱👑 _${usedPrefix}enable *autoread*_
┣ ➱👑 _${usedPrefix}disable *autoread*_
┗━━━━━━━━━━━━━┛
━〘 💚⚡💚⚡💚⚡💚⚡💚 〙━`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '𝐴𝐺𝑅𝑂𝑀𝑂𝑆 𝑆𝑃-𝐵𝑂𝑇', '𝙼𝙴𝙽𝚄 𝚂𝙸𝙼𝙿𝙻𝙴', `#menusimple`, '𝙼𝙴𝙽𝚄 𝙰𝚄𝙳𝙸𝙾𝚂', `#menuaudios`, '𝙶𝚁𝚄𝙿𝙾 𝙾𝙵𝙸𝙲𝙸𝙰𝙻', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'bienvenido-menu-creador.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(menucreador)$/i
handler.fail = null
module.exports = handler
