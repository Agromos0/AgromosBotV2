let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/homero-chino.mp3'
conn.sendFile(m.chat, vn, 'homero-chino.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Homero chino|homero chino|Homero ch|HOMERO CHINO/ 
handler.command = new RegExp
module.exports = handler
