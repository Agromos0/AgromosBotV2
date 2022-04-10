let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/adios.mp3'
conn.sendFile(m.chat, vn, 'adios.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Me voy|me voy|ME VOY|Me fui|me fui|ME FUI|Se fue|se fue|SE FUE|Adios|adios|ADIOS|BYE|Bye|CHAO/i 
handler.command = new RegExp
module.exports = handler
