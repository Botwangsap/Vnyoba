const { googleImage }  =require('@bochilteam/scraper')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    const res = await googleImage(text)
    let image = pickRandom(res)
    let link = image
    let caption = `*GOOGLE IMAGE*
    
*Result:* ${text}
*Source:* Google
`
 conn.sendFile(m.chat, link, null, caption, m)
}
handler.help = ['imagen']
handler.tags = ['img']
handler.command = /^(img|image|gimage|imagen)$/i
handler.diamond = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}