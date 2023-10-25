let handler = async (m, { conn }) => {
let sewa = `
🤖 *[ Chat Dengan Creator ]*
wa.me/6281998425782

╔╣ *PREMIUM USER*
║ • Infinity Limit
║ • Full Akses Private Chat
╚══╣ *Harga :* Rp.10.000 / 2 minggu

╔╣ *SEWA BOT*
║ • Dapat Premium
║ • Bebas Invit ke 1 Grup
╚══╣ *Harga :* Rp.30.000 / permanent

╔╣ *JASA RUN BOT*
║ • Nebeng Run SC Via RDP
║ • SC wajib *plugin*, bukan case
╚══╣ *Harga :* Rp.30.000 / bulan

╔╣ *JADI BOT*
║ • Jadi Bot AnggaKz Always ON
║ • Custom Namabot, Owner, rules, dll.
║ • Bisa Req Tampilan atau Fitur
╚══╣ *Harga :* Rp.50.000 / bulan

- Pembayaran via  *Dana.*
  *( tidak ada opsi lain )*
  ke nomor 081998425782
- Whatsapp Multi Device
- Run via RDP (Always ON)
- Request Fitur? *Chat Link Creator di atas.*
`
conn.reply(m.chat, sewa, m, null, rpyt)
}
handler.help = ['jadibot']
handler.tags = ['jadibot']
handler.command = /^(jadibot|listjadibot|stopjadibot)$/i

export default handler