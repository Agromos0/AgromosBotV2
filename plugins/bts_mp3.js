let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/bts.mp3'
conn.sendFile(m.chat, vn, 'bts.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Valla fan de bts|bts|BTS|VALLA FAN DE BTS|vallan fan de bts/ 
handler.command = new RegExp
module.exports = handler
