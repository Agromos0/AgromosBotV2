let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de AGROMOS SP - Bot*

*➤ Grupo oficial del Bot:*
*1.-https://chat.whatsapp.com/CBoAGmEFcCy44xIoWBSgzJ

*➤ Grupo2 oficial del Bot:*
*2.-https://chat.whatsapp.com/FZsoX7iGBZLBQgFX9MUXIy
*➤ Grupo3 oficial del Bot:*
*3.-https://chat.whatsapp.com/K0UCo7igED92q9c1w2DiEH
*➤ Grupo4 oficial del Bot:*
*4.-https://chat.whatsapp.com/LMmIhHVPmFv3qvVtPTMSu7
*➤ Grupo5 oficial del Bot:*
*5.-https://chat.whatsapp.com/INCsp1GzjZFKBeZbuzpFbq
*➤ Grupo6 oficial del Bot:*
*6.-https://chat.whatsapp.com/LGg7jeOW7njH19daSmxmnd
*➤ Grupo7 oficial del Bot:*
*7.-https://chat.whatsapp.com/IGusBLuIwdM7s4vHoJRAps
`.trim() 
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 AGROMOS SP - BOT 🔥*', 'status@broadcast')}
handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler
