//PREXZY SOLOS
//YouTube: @prexzyvilla
//Telegram: t.me/prexzyvilla_tech



const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: fang7x" //ur yt chanel name
global.socialm = "IG : fang7x" //ur github or insta name
global.location = "MOROCCO" //ur location

//new
global.botname = 'QUEEN NYX👸' //ur bot name
global.ownernumber = '212637915359' //ur owner number
global.ownername = '© Jawad' //ur owner name
global.websitex = "https://whatsapp.com/channel/0029VbAD3GrIHphJRlJzqG2j" //"https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F"
global.wagc = "https://chat.whatsapp.com/0029VbAD3GrIHphJRlJzqG2j" //"https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F"
global.idch = '120363322892680943@newsletter'
global.themeemoji = '👾'
global.wm = "NYX👸"
global.botscript = 'https://whatsapp.com/channel/0029VbAD3GrIHphJRlJzqG2j' //'https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F' //script link
global.packname = "Queen Nyx👸"
global.author = "Jawad"
global.creator = "212637915359@s.whatsapp.net"
global.xprefix = '.'
global.antidelete = true
global.premium = ["212688204456"] // Premium User
global.hituet = 0
global.chatModeUsers = {}; // Store chat mode status per user

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v4' // reply type 'v1' => 'v3'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done ✓',
    error: 'Error !',
    success: 'Succes •'
}
//thumbnail
global.thumb = fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
