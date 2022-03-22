let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/menu-agromos-bot.mp3'
conn.sendFile(m.chat, vn, 'menu-agromos-bot.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /#menu|#MENU/i 
handler.command = new RegExp
module.exports = handler
