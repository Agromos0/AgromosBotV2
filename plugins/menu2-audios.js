let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
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
*_💚 Hola ${username} 💚_*

*<MENU DE AUDIOS/>*
- Escribe las palabras/frases tal como estan, no hace falta poner ningun prefijo (#, ., *, etc) 

° ➬🔊 _Quien es tu sempai botsito 7w7_
° ➬🔊  _Te diagnostico con gay_
° ➬🔊  _A nadie le importa_
° ➬🔊  _Fiesta del admin_
° ➬🔊  _Fiesta del admin 2_
° ➬🔊  _Vivan los novios_
° ➬🔊  _Feliz cumpleaños_
° ➬🔊  _Noche de paz_
° ➬🔊  _Buenos dias_
° ➬🔊  _Audio hentai_
° ➬🔊  _Chica lgante_
° ➬🔊  _Feliz navidad_
° ➬🔊  _Vete a la vrg_
° ➬🔊  _Pasa pack Bot_
° ➬🔊  _Atencion grupo_
° ➬🔊  _Marica quien_
° ➬🔊  _Murio el grupo_
° ➬🔊  _Oh me vengo_
° ➬🔊  _Viernes_
° ➬🔊  _Baneado_
° ➬🔊  _Sexo_
° ➬🔊  _Hola_
° ➬🔊  _Un pato_
° ➬🔊  _Nyanpasu_
° ➬🔊  _Te amo_
° ➬🔊  _Yamete_
° ➬🔊  _Bañate_
° ➬🔊  _Es puto_
° ➬🔊  _La biblia_
° ➬🔊  _Onichan_
° ➬🔊  _Bot puto_
° ➬🔊  _Shadow Bot_
° ➬🔊  _Siuuu_
° ➬🔊  _Rawr_
° ➬🔊  _UwU_
° ➬🔊  _:c_
° ➬🔊  _a_
° ➬🔊  _ara ara_

❗LOS  SIGUIENTE  COMANDOS SON NUEVOS REPORTAR POR SI ALGUNO NO SIRVE EN #report
° ➬🔊  _Bien pesando woody_
° ➬🔊  _Fino señores_
° ➬🔊  _Entrada épica_
° ➬🔊  _Me pica los cocos_
° ➬🔊  _verdad que te engañe_
° ➬🔊  _Yoshi_
° ➬🔊  _No digas eso papu_
° ➬🔊  _Masivo_
° ➬🔊  _Sus_
° ➬🔊  _La voz de hombre_
° ➬🔊  _Jesucristo_
° ➬🔊  _Una pregunta_
° ➬🔊  _Pikachu_
° ➬🔊  _Yokese_
° ➬🔊  _pero esto_
° ➬🔊  _Basado_
° ➬🔊  _Tengo los calzones del admin_
° ➬🔊  _Estoy triste_
° ➬🔊  _Audio Hentai_
° ➬🔊  _Navidad_
° ➬🔊  _Cagaste_
° ➬🔊  _Niconico
° ➬🔊 _Wtf_
° ➬🔊 _Contexto_
° ➬🔊 _OMG_
° ➬🔊 _Me voy_
° ➬🔊 _No digas mamadas meriyen
° ➬🔊 _Me los voy a coger_
° ➬🔊 _Eres gay bot_
° ➬🔊 _No chupala_
° ➬🔊 _Pasen un pornito_
*_「 💚A̶G̶R̶O̶M̶O̶S̶ S̶P̶-̶B̶O̶T̶💚  」_*`.trim()
let mentionedJid = [who]
conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
}}
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.fail = null
module.exports = handler
