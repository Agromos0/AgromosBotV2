let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/eres-gay-bot.mp3'
conn.sendFile(m.chat, vn, 'eres-gay-bot.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Eres gay bot|ERES GAY BOT|eres gay bot|Bot gay|bot gay/i 
handler.command = new RegExp 

handler.fail = null
handler.exp = 100
module.exports = handler
