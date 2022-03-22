let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/no-digas-mamadas-meriyein.mp3'
conn.sendFile(m.chat, vn, 'no-digas-mamadas-meriyein', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /NO digas|no digas|No digas mamadas/i 
handler.command = new RegExp
module.exports = handler
