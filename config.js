import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//═══════════════════════════════════════════════//
//                  CONFIGURACIÓN GLOBAL                 //
//═══════════════════════════════════════════════//

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏
 
global.owner = [
  ['5491156178758', '𝑫𝒆𝒗-𝒇𝒆𝒅𝒆𝒙𝒚𝒛 ☕', true],
  ['5491137612743', '𝑫𝒆𝒗-𝒇𝒆𝒅𝒆𝒙𝒚𝒛 🌙', true],
  ['258076682772557@lid', 'lid 👤', true],
];

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.mods = ['5491156178758', '5491137612743']
global.suittag = ['5491156178758'] 
global.prems = ['5491156178758', '5491137612743']

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.packname = '𝑵𝒂𝒈𝒊-𝑩𝒐𝒕𝑽𝟏: 𝑫𝒆𝒗-𝒇𝒆𝒅𝒆𝒙𝒚𝒛'
global.botname = 'NᴀɢɪBᴏᴛV𝟷'
global.textbot = 'N A G I - A I ⚽'
global.author = '𝑁𝑎𝑔𝑖-𝐵𝑜𝑡𝑉𝟷 𝐵𝑦 𝐷𝑒𝑣-𝑓𝑒𝑑𝑒𝑥𝑦𝑧'
global.dev = '© Pᴏᴡᴇʀᴇᴅ Bʏ Dᴇᴠ-ꜰᴇᴅᴇxʏᴢ'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.libreria = 'Baileys'
global.baileys = 'V 6.7.9' 
global.languaje = 'Español'
global.vs = '2.2.0'
global.vsJB = '5.0'
global.nameqr = 'Nagibot'
global.namebot = 'Nagi Bot'
global.sessions = 'NagiSessions'
global.jadi = 'jadibts' 
global.nagiJadibts = true

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.moneda = 'NagiCoins'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.gp1 = 'https://chat.whatsapp.com/DvD63iVO8qDLWdoPl3AsyG?mode=ems_copy_t';
global.channel = 'https://whatsapp.com/channel/0029VbApe6jG8l5Nv43dsC2N';
global.creador = 'wa.me/5491156178758'
global.correo = 'fedelanyt20@gmail.com';

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

let catalogo2;
try {
  catalogo2 = fs.readFileSync('./src/catalogo.jpg');
} catch (error) {
  console.log('Warning: ./src/catalogo.jpg not found, using catalogo as fallback');
  catalogo2 = catalogo; // Using the existing 'catalogo' variable as fallback
}
global.photoSity = [catalogo2]

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.ch = {
  ch1: '120363417186717632@newsletter',
}

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.APIs = {
xyro: { url: "https://xyro.site", key: null },
yupra: { url: "https://api.yupra.my.id", key: null },
vreden: { url: "https://api.vreden.web.id", key: null },
delirius: { url: "https://api.delirius.store", key: null },
zenzxz: { url: "https://api.zenzxz.my.id", key: null },
siputzx: { url: "https://api.siputzx.my.id", key: null }
}

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.multiplier = 69
global.maxwarn = '3'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
