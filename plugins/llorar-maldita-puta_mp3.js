let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/maldita-puta.mp3'
conn.sendFile(m.chat, vn, 'maldita-puta.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Calla maldita puta|DEJA DE LLORAR MALDITA PUTA|Deja de llorar maldita puta|Calla maldita puta/ 
handler.command = new RegExp
module.exports = handler
