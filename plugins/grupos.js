let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de AGROMOS SP - Bot*

*➤ Grupo oficial del Bot:*
*1.-https://chat.whatsapp.com/JiONzKmPvB25su65XzAbqA
`.trim() 
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 THE SHADOW BROKERS - BOT 🔥*', 'status@broadcast')}
handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler
