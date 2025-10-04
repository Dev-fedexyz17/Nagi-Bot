import fs from 'fs'
import path from 'path'

let handler = async (m, { command, usedPrefix, plugins, conn}) => {
  
  const isValidCommand = Array.isArray(plugins) &&
    plugins.some(plugin =>
      plugin.command &&
      plugin.command instanceof RegExp &&
      plugin.command.test(command)
)

  if (isValidCommand) return

  const fake = {
    key: {
      remoteJid: "status@broadcast",
      fromMe: false,
      participant: "0@s.whatsapp.net"
},
    message: {
      liveLocationMessage: {
        degreesLatitude: 0,
        degreesLongitude: 0,
        accuracyInMeters: 0,
        title: "ɴᴀɢɪ-ʙᴏᴛᴠ𝟷: ᴅᴇᴠ-ꜰᴇᴅᴇxʏᴢ",
        caption: "ᴄᴀɴᴀʟ ᴏꜰɪᴄɪᴀʟ",
        sequenceNumber: 1,
        timeOffset: 0,
        jpegThumbnail: Buffer.alloc(0)
}
}
}

  // ❌ Respuesta si el comando no existe
  await conn.sendMessage(m.chat, {
    text: `❌ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ *${usedPrefix}${command}* ɴᴏ ᴇxɪꜱᴛᴇ.\nᴜꜱᴀ *${usedPrefix}ᴍᴇɴᴜ* ᴘᴀʀᴀ ᴠᴇʀ ʟᴀ ʟɪꜱᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏꜱ ᴅɪꜱᴘᴏɴɪʙʟᴇꜱ.`,
    contextInfo: {
      externalAdReply: {
        title: '© ɴᴀɢɪ-ʙᴏᴛᴠ𝟷',
        body: 'ᴄᴏᴍᴀɴᴅᴏ ɪɴᴠᴀ́ʟɪᴅᴏ',
        thumbnailUrl: 'https://cdn.yupra.my.id/yp/dpi4ktu8.jpg',
        mediaType: 1,
        renderLargerThumbnail: true,
        sourceUrl: 'https://github.com/hashirama-dev'
}
}
}, { quoted: fake})

  await m.react('👻')
}

export default handler
