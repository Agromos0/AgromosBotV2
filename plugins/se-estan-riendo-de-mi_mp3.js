let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/se-estan-riendo-de-mi.mp3'
conn.sendFile(m.chat, vn, 'se-estan-riendo-de-mi.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Joder se estan riendo de mi|joder se está riendo de mi|Joser se está riendo de mi|jajaja|jejeje|jsjsjs|se están riendo de mi|jiji/ 
handler.command = new RegExp
module.exports = handler
