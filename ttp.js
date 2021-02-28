case '#triggered':

                if (isMedia && isImage || isQuotedImage) {
            const packname = 'Creator'
            const author = 'Maxbot'
                    await maxbot.reply(from, ind.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const FotoUrl = await uploadImages(mediaData, `triggered.${sender.id}`)
                    await maxbot.sendStickerfromUrl(from, `https://lolhuman.herokuapp.com/api/editor/triggered?apikey=chika-sad-key&img=${FotoUrl}`, { author: `${author}`, pack: `${packname}`, keepScale: true })
               } else if (quotedMsg && quotedMsg.type == 'chat') {
                    await maxbot.reply(from, ind.wait(), id)
                    const ppnya = await maxbot.getProfilePicFromServer(quotedMsgObj.sender.id)
                    if (ppnya === undefined) {
                        var ppnyaa = errorImg
                    } else {
                        ppnyaa = ppnya
                    } 
                    const datappnya = await bent('buffer')(ppnyaa)
                    const linkppnya = await uploadImages(datappnya, `${sender.id}_ph`) 
                    await maxbot.sendStickerfromUrl(from, `https://lolhuman.herokuapp.com/api/editor/triggered?apikey=chika-sad-key&img=${linkppnya}`, { author: `${author}`, pack: `${packname}`, keepScale: true })
                } else {
                    await maxbot.reply(from, ind.wait(), id)
                    const ppRaw = await maxbot.getProfilePicFromServer(sender.id)
                    if (ppRaw === undefined) {
                        var ppnyaa = errorImg
                    } else {
                        ppnyaa = ppRaw
                    } 
                    const datappnya = await bent('buffer')(ppnyaa)
                    const linkppnya = await uploadImages(datappnya, `${sender.id}_ph`) 
                    await maxbot.sendStickerfromUrl(from, `https://lolhuman.herokuapp.com/api/editor/triggered?apikey=chika-sad-key&img=${linkppnya}`, { author: `${author}`, pack: `${packname}`, keepScale: true })
                }
            break