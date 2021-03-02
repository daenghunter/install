            case '#sgifwm':
                if (isMedia && type === 'video' || mimetype === 'image/gif' || isQuotedVideo || isQuotedGif) {
                    await bocchi.reply(from, 'Permintaan sedang di proses!', id)
                    try {
                        const encryptMedia = isQuotedGif || isQuotedVideo ? quotedMsg : message
                        const mediaData = await decryptMedia(encryptMedia, uaOverride)
                        const videoBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                        await bocchi.sendMp4AsSticker(from, videoBase64, null, { stickerMetadata: true, pack: 'MAXBOT', author: '@alfiyandev', fps: 30, startTime: '00:00:00.0', endTime : '00:00:05.0', crop: false, loop: 0 })
                            .then(() => {
                                console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                            })
                    } catch (err) {
                        console.error(err)
                        await maxbot.reply(from, 'Terjadi kesalahan! Mungkin durasi video terlalu banyak :(', id)
                    }
                } else {
                    await maxbot.reply(from, 'Terjadi kesalahan!', id)
                }
            break
