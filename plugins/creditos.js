let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭═════• 💚⚡💚⚡💚 •═════╮ 

*agromos bot por agromos sp tiene funciones que pertenezcan a las siguentes Empresa(s)|Organizacion(es)|Persona(s):*

 🔰BrunoSobrino 
THE SHADOW BROKERS 

🔰Gatanina
𝐺𝐴𝑇𝐴 𝐵𝑂𝑇

 
╰═════• 💚⚡💚⚡💚 •═════╯
`.trim() 
//¡GRACIAS!
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '💚agromosSP', 'status@broadcast')
}
handler.command = /^(creditos|CREDITOS|Creditos|Credito|Crédito)$/i

module.exports = handler
