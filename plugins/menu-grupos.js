let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
//    pp = await conn.getProfilePicture(who)
} catch (e) {
} finally {
let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let username = conn.getName(who)
let str = `
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
╰━〘 💚⚡💚⚡💚⚡💚⚡💚 〙━╯
`.trim()
let mentionedJid = [who]
conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
}}
handler.command = /^(menugrupos)$/i
handler.fail = null
module.exports = handler
