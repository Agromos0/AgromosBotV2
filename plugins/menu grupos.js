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
let vn = './media/menu-bienvenidos.mp3'
let menu =`
╭━〘 💚⚡️💚⚡️💚⚡️💚⚡️💚 〙━╮
 ‖    ⚡ _*AGROMOS BOT SP_* ⚡
 ‖ 💚*¡𝗛ola! ${username}* 💚
 ‖
 ‖ Ⓜ️ *_MENÚ GRUPOS_* Ⓜ️
 ┏━━━━━━━━━━━━━┓
┃ *<GESTION DE GRUPOS/>* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ➱⚡ _${usedPrefix}admins *texto*_ 
┣ ➱⚡ _${usedPrefix}añadir *numero*_ 
┣ ➱⚡ _${usedPrefix}sacar @tag_
┣ ➱⚡ _${usedPrefix}save *@tag + nombre de contacto*_
┣ ➱⚡ _${usedPrefix}daradmin *@tag*_
┣ ➱⚡ _${usedPrefix}quitaradmin *@tag*_
┣ ➱⚡ _${usedPrefix}grupo *abrir / cerrar*_
┣ ➱⚡ _${usedPrefix}enable welcome_
┣ ➱⚡ _${usedPrefix}disable welcome_
┣ ➱⚡ _${usedPrefix}enable antilink_
┣ ➱⚡ _${usedPrefix}disable antilink_
┣ ➱⚡ _${usedPrefix}enable antilink2_
┣ ➱⚡ _${usedPrefix}disable antilink2_
┣ ➱⚡ _${usedPrefix}enable delete_
┣ ➱⚡ _${usedPrefix}disable  delete_ 
┣ ➱⚡ _${usedPrefix}link_
┣ ➱⚡ _${usedPrefix}notificar *texto*_
┣ ➱⚡ _${usedPrefix}setname *Nuevo nombre del grupo*_
┣ ➱⚡ _${usedPrefix}setdesc *Nueva descripción del grupo*_
┣ ➱⚡ _${usedPrefix}infogrupo_
┣ ➱⚡ _${usedPrefix}invocar *texto*_
┣ ➱⚡ _${usedPrefix}del *responder a un mensaje del bot*_
┣ ➱⚡ _${usedPrefix}fantasmas_
┣ ➱⚡ _${usedPrefix}banchat_
┣ ➱⚡ _${usedPrefix}unbanchat_
┗━━━━━━━━━━━━━┛
━〘 💚⚡💚⚡💚⚡💚⚡💚 〙━`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '𝐴𝐺𝑅𝑂𝑀𝑂𝑆 𝑆𝑃-𝐵𝑂𝑇', '𝙼𝙴𝙽𝚄 𝚂𝙸𝙼𝙿𝙻𝙴', `#menusimple`, '𝙼𝙴𝙽𝚄 𝙰𝚄𝙳𝙸𝙾𝚂', `#menuaudios`, '𝙶𝚁𝚄𝙿𝙾 𝙾𝙵𝙸𝙲𝙸𝙰𝙻', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'menu-bienvenidos.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(menugrupos)$/i
handler.fail = null
module.exports = handler
