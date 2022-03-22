let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/me-los-voy-a-coger.mp3'
conn.sendFile(m.chat, vn, 'me-los-voy-a-coger', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Me los voy a coger|ME LOS VOY A COGER|Coger/i 
handler.command = new RegExp
module.exports = handler
