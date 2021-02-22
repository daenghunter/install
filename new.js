case '/play':
		    if (isLimit(serial)) return
			if (args.length === 0) return maxbot.reply(from, `Kirim perintah */play judul lagu*, contoh */play how like that*`, id)
            maxbot.reply(from,'Wait ya bosku, audio sedang dicari !',id)
	        const getvids = await axios.get(`https://api.zeks.xyz/api/ytplaymp3?q=${body.slice(6)}&apikey=apimaxbot`)
	        if (getvids.data.status == false) return maxbot.reply(from, getvids.data.message, id)
            if (Number(getvids.data.result.url_audio.split(' MB')[0]) >= 20.00) return maxbot.reply(from, 'Maaf durasi music sudah melebihi batas maksimal 10 MB!', id)
			await maxbot.sendFileFromUrl(from, getvids.data.result.thumbnail, 'gambar.jpg', `Title: ${getvids.data.result.title}\n\nSize: ${getvids.data.result.size}\nType: Mp3\nLink Download: ${getvids.data.result.url_audio}\n\n*_Mohon Tunggu Bot Akan Mengirim Audio!_*`, id)
            const responses = await fetch(getvids.data.result.url_audio);
            const buffer = await responses.buffer(); 
            await fs.writeFile(`./media/play.mp3`, buffer)
            await maxbot.sendFile(from,'./media/play.mp3', '',id)
           break
case '/ig': 
            if (args.length === 0) return maxbot.reply(from, `Kirim perintah /ig [ Link Instagram ]`)
            await maxbot.reply(from, mess.wait, id);
			const getresult = await axios.get(`https://api.zeks.xyz/api/ig?apikey=${zekskey}&url=${body.slice(3)}`)
			if (getresult.data.status == false) return maxbot.reply(from, getresult.data.message, id)
                for (let i = 0; i < getresult.data.result.length; i++) {
		    maxbot.sendFileFromUrl(from, getresult.data.result[i].url, `ig.${getresult.data.result[i].type}`, `「 INSTAGRAM 」\n\n*Username*: ${getresult.data.owner}\n*Caption*: ${getresult.data.caption}`, id);
                }
			break
