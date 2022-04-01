//let vn = './media/mariana.mp3'
//NO MODIFIQUES EL NÚMERO DE LA CREADORA NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT

//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO
let handler = async (m, { conn, command, text, usedPrefix }) => {
let fetch = require('node-fetch')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = 'https://i.imgur.com/BfsbCOR.jpg'
//let vn = './media/menu.mp3'
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
╰━〘 💚⚡💚⚡💚⚡💚⚡💚 〙━╯
AGROMOS`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
👉 AGROMOS BOT | AGROMOS SP 👈
`.trim(), menu, '🔰 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀TO 🔰', `#mcompleto`,  m, false, { contextInfo: { mentionedJid }})
await await await await await await conn.sendFile(m.chat, vn, 'menugatabot.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})}
handler.command = /^(menugrupos|menugrupos|MENUGRUPOS|MEMU GRUPPS)$/i
module.exports = handler
