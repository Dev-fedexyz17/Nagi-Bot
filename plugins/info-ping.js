import speed from 'performance-now'
import { exec} from 'child_process'
import { promises as fs} from 'fs'

const verifyRepo = async () => {
  try {
    const pkg = await fs.readFile('./package.json', 'utf-8')
    const json = JSON.parse(pkg)
    return json.repository?.url === 'git+https://github.com/Dev-fedexyz17/Nagi-Bot.git'
} catch {
    return false
}
}

let handler = async (m, { conn}) => {
  if (!await verifyRepo()) {
    return m.reply('❀ Este comando solo está disponible para Nagi-Bot.\n> https://github.com/Dev-fedexyz17/Nagi-Bot')
}

  let timestamp = speed()
  let sentMsg = await conn.reply(m.chat, '❀ Calculando ping...', m)
  let latency = speed() - timestamp

  exec(`neofetch --stdout`, (error, stdout, stderr) => {
    let sysInfo = error
? '❌ Error al obtener info del sistema'
: stdout.toString("utf-8")
.replace(/Memory:/, "Ram:")
.split('\n')
.map(line => line.trim())
.filter(line => line.length)
.join(' | ')

    exec('git status --short', (err, gitOut) => {
      let gitStatus = err
? '❌ Error al verificar Git'
: gitOut.trim() === ''
? '✔️ Git limpio'
: `⚠️ Cambios locales: ${gitOut.trim().replace(/\n/g, ' | ')}`

      let result = `✰ Pong ⴵ ${latency.toFixed(0)}ms | ${gitStatus} | ${sysInfo}`
      conn.sendMessage(m.chat, { text: result, edit: sentMsg.key}, { quoted: m})
})
})
}

handler.help = ['ping']
handler.tags = ['info']
handler.command = ['ping', 'p']

export default handler
