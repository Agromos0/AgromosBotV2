let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/no-chupala.mp3'
conn.sendFile(m.chat, vn, 'no-chupala.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /NO chupala|NO CHUPALA|CHUPALA|chupala|no chupala/i 
handler.command = new RegExp 

handler.fail = null
handler.exp = 100
module.exports = handler
