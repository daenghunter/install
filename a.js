case '#cok':
const riq = body.slice(6)
if (!riq) return maxbot.reply(from, 'Masukin Judulnya Cuk', message.id)
const vh = await axios.get(`http://lolhuman.herokuapp.com/api/ytplay?apikey=chika-sad-key&query=${riq}`).json()
const cavh = `*Now Playing 🎶*

*» [ ${vh.result.title} ] «*

     *0:00 ─〇───── ${vh.result.duration}*
              *⇄ ◃◃ ⅠⅠ ▹▹ ↻*

*_Song Requested by @${sender.id.replace('@c.us','')}_*`
maxbot.sendTextWithMentions(from, cavh)
maxbot.sendPtt(from, MP3.data.result.audio[2].link, 'u.mp3', '')
break