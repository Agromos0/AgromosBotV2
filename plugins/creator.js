function handler(m) {
  this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
  this.sendContact(m.chat, '523931806576', 'NUMERO SOPORTE - AGROMOS SP OFICIAL', m)
  this.sendContact(m.chat, '595983186566', 'OFICIAL - EL SANTI EX ACTOR NOPOR', m)
  }
handler.help = ['contacto']
handler.tags = ['info']
 
handler.command = /^(contacto|owner|creator|creador|propietario|dueño|dueña)$/i

module.exports = handler
