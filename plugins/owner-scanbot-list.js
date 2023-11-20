let handler = async (m, { conn }) => {
let sewa = `
❏──「 *listjadibot* 」
✅ https://wa.me/6281998425782?text=.jadibot
❏──────────────๑
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['listjadibot']
handler.tags = ['jadibot']
handler.command = /^(list|listjadibot|jadibotlist)$/i

export default handler
