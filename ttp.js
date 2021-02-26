case '#ttp1':
case '#attp':
	   if (args.length === 0) return maxbot.reply(from, 'Mohon masukkan teksnya 💐', id)
           const packname = 'Creator'
            const author = 'Maxbot'
                const fattp = await get.get(`https://api.xteam.xyz/attp?text=${body.slice(6)}`).json()
                await maxbot.sendImageAsSticker(from, fattp.result, { author: '${author}', pack: `${packname}`, keepScale: true })
                    .then(() => console.log('Success creating GIF!'))
                    .catch(async (err) => {
                        console.error(err)
                        await maxbot.reply(from, 'Error!', id)
                    })
            break