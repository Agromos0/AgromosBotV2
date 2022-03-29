function handler(m) {
this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
this.sendContact(m.chat, '18178659441', 'AGROMOS SP-CREADOR - Oficial', m)}
this.sendContact(m.chat, '595983186566', 'SANTI MI MANO DERECHA - Y ES ACTOR NOPOR', m)}
handler.command = /^(contacto|agromos|creator|creador|propietario|dueño)$/i
module.exports = handler
