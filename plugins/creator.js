function handler(m) {
this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
this.sendContact(m.chat, '523931806576', 'AGROMOS SP OFICIAL', m)}
handler.command = /^(contacto|agromos|creator|creador|propietario|dueño)$/i
module.exports = handler
