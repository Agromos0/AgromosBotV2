let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/pasen-un-pornito.mp3'
conn.sendFile(m.chat, vn, 'pasen-un-pornito.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Pasen un pornito|PASEN UN PORNITO|pornito|PORNITO|Pasen porno/ 
handler.command = new RegExp
module.exports = handler
