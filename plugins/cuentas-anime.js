let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭═════• 💚⚡💚 •═════╮ 

*Ver anime gratis premiun durante 14 dias|Te pedimos que no cambies nada:*

 🔰nombre  de la apk Crunchyroll descargala en la play store 🔰

*🙀💚correo:toxicoyt084@gmail.com*
Contraseña:BotAgromos2001
═══════════════
*🙀💚correo:cupsisadri@vusra.com
*contra:Agromos19
 
*Data*
Fecha de cuenta agregada:24/03/22
Vencimiento:12 días restantes 

Pronto  nuevas cuentas aparecerán aquí😼💚
╰═════• 💚⚡💚 •═════╯
`.trim() 
//¡GRACIAS!
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '💚agromosSP', 'status@broadcast')
}
handler.command = /^(cuentasanime|CUENTASANIME|VerAnimeGratis|Crunchyroll|veranime)$/i

module.exports = handler
