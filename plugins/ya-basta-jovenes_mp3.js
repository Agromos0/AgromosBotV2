let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/basta-jovenes.mp3'
conn.sendFile(m.chat, vn, 'basta-jovenes.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Ya basta jovenes|basta jovenes|YA BASTA JOVENESS|BASTA JOVENES|Dejen dormir|DEJEN DORMIR|dejen dormir/ 
handler.command = new RegExp
module.exports = handler
