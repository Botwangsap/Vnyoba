/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['62831914860899', '© AnggaKz', true],
  ['62831914860899']
] // Nomor Owner

global.mods = ['62831914860899'] 
global.prems = ['62831914860899', '6283175007441', '62895341145875', '6288211866802', '6288211304749', '628811167355']

// apikey
global.lann = 'AnggaKz'
global.xzn = 'AnggaKz' //daftar sendiri jika key habis https://xzn.wtf/
// apikeylu di ganti menggunakan apikey yang di dapatkan di website https://api.betabotz.org. contohnya global.lann = 'nans' (contoh). cara mendapatkan apikey. masuk website > scroll ke bawah dan cari harga yang kamu mau ada juga yang free dan tekan > otomatis akan di arahkan untuk registrasi, isi data diri email dll. > kalo sudah klik profil dan di situ akan muncul apikey mu. terima kasih.

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-fgmods.ddns.net': 'dPKgFE8f',
  'https://api.betabotz.org': 'AnggaKz'
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}

// Watermark
global.nama = '© AnggaKz' // nama owner
global.nomor = '62831914860899' // nomor owner
global.nans = '© Bot Discord' // nama bot 
global.thumb = 'https://telegra.ph/file/a8c77ca227fe1041183b6.jpg' // thumbnail bot ( foto menu )
global.dygp = 'https://chat.whatsapp.com/Ly28IB8Fel4JbPS0qCUy2p' // link group yang ada di menu

// Sticker wm
global.packname = '© Bot Discord MD✅ (0831-9148-6089)┃ᴮᴼᵀ' 
global.author = '✅jika ingin sewabot silahkan chat ownerbot (081998425782)' 
global.fgig = 'https://www.instagram.com/anggatzi123' // bebas tapi jangan kosong 
global.fgsc = 'https://www.instagram.com/anggatzi123' // bebas tapi jangan kosong
global.fgyt = 'https://www.instagram.com/anggatzi123' // bebas tapi jangan kosong
global.fgpyp = 'https://www.instagram.com/anggatzi123' // bebas tapi jangan kosong
global.fglog = 'https://telegra.ph/file/a8c77ca227fe1041183b6.jpg'

// Other
global.dana = '6281998425782'
global.qris = 'https://www.instagram.com/anggatzi123'
global.web = 'https://www.instagram.com/anggatzi123'
global.email = 'BotDiscord@gmail.com'
global.lastm = 'ꜱɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙʏ © AnggaKz™'

global.wait = 'Tunggu sebentar....'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
