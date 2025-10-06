import speed from 'performance-now'
import { exec} from 'child_process'

let handler = async (m, { conn}) => {
  const start = speed()
  const sentMsg = await conn.reply(m.chat, '❀ Calculando ping...', m)
  const latency = speed() - start

  exec('neofetch --stdout', (error, stdout) => {
    if (error) {
      return conn.sendMessage(m.chat, {
        text: `✰ *¡Pong!*\n> Tiempo ⴵ ${latency.toFixed(0)}ms\n❌ Error al obtener información del sistema.`,
        edit: sentMsg.key
}, { quoted: m})
}

    const info = stdout.toString('utf-8').replace(/Memory:/, 'Ram:')
    const result = `✰ *¡Pong!*\n> Tiempo ⴵ ${latency.toFixed(0)}ms\n${info}`

    conn.sendMessage(m.chat, { text: result, edit: sentMsg.key}, { quoted: m})
})
}

handler.help = ['ping']
handler.tags = ['info']
handler.command = ['ping', 'p']

export default handler
