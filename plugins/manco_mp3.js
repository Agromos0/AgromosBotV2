let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/manco.mp3'
conn.sendFile(m.chat, vn, 'manco.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Mi compa el manco|MI COMPA EL MANCO|mi compa el manco/ 
handler.command = new RegExp
module.exports = handler
