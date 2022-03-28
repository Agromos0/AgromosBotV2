let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/quítate-la-ropa-peter.mp3'
conn.sendFile(m.chat, vn, 'quítate-la-ropa-peter.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Quítate la ropa peter|QUITATE LA ROPA PETER|QUITATE LA ROPA|Quitate la ropa/i 
handler.command = new RegExp 

handler.fail = null
handler.exp = 100
module.exports = handler
