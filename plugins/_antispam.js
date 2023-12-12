let handler = m => m

handler.all = async function (m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 5000) {
            if (this.spam[m.sender].count > 5000) {
                //global.db.data.users[m.sender].banned = true
                m.reply('Jangan spam, beri jeda 5 detik!.kosekuensi jika melanggar anda akan terbanned tidak bisa mengunakan bot Discord')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}

module.exports = handler
