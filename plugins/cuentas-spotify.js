let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭═════• 💚⚡💚 •═════╮ 

*Escuchar spotify premiun gratis premiun durante 30 dias|Te pedimos que no cambies nada:*

 🔰nombre  de la apk SPOTIFY descargala en la play store 🔰

*🙀💚correo:wagepa4304@flowminer.com*
Contraseña:BotAgromos
 
*Data*
Fecha de cuenta agregada:25/03/22
Vencimiento:25/04/22
═══════════
*VER DISNEY DURANTE 30 DIAS*
Correo:critchleyryan@gmail.com
Contra:Ronaldo09!

*Data*
Fecha de cuenta agregada:06/4/22
Vencimiento:06/5/22
Pronto  nuevas cuentas aparecerán aquí😼💚
╰═════• 💚⚡💚 •═════╯
`.trim() 
//¡GRACIAS!
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '💚agromosSP', 'status@broadcast')
}
handler.command = /^(cuentaspotify|cuentasdisney|ESPOTIFY|espotify|escucharspotify)$/i

module.exports = handler
