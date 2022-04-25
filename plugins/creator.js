function handler(m) {
  this.sendContact(m.chat, '18178659441', 'CREADORES OFICIAL- AGROMOS SP OFICIAL', m)
  this.sendContact(m.chat, '595983186566', 'COLABORADOR OFICIAL - EL SANTI EX ACTOR NOPOR', m)
  }
handler.help = ['contacto']
handler.tags = ['info']
 
handler.command = /^(contacto|owner|creator|creador|propietario|dueño|dueña)$/i

module.exports = handler
