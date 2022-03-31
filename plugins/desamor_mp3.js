let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/desamor.mp3'
conn.sendFile(m.chat, vn, 'desamor.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Música desamor|MUSICA DESAMOR|Desamor|DESAMOR|DÉSAMOR|desamorr|DESAMORRR|DESAMOR/ 
handler.command = new RegExp
module.exports = handler
