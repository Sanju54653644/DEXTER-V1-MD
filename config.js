const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '917047294917'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "917047294917"
global.devs = '917047294917';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUdMOW0yN1ZYNThybXpuYUdtc3N2SC9aZEFBNkI4dGs1MjJzUVBOU0IzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU9LNGpQUXVkRWtsbHl1b1Y3ZDFPUDk5cno3WUpVZzVSRk83WUpJc2RScz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRXVNK2l2V1VBNnZjdjRaYVpZcDRkZFhDUzZlZng2c2tObmkvSDFHMlVnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMcmJHa201cGM4Qk8vcTR6a3N4cFhkMiszaFpIVGUzTUUyZmNlajBRLzFNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVCUVZmV0VINjl5Y1h5N0VHcUhyVVJ4M2toWHJ4ZE1mSGZUL05DY1BVMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhoRnBhWWlnZ2dJd2k3WFdXenRpOUZhcTFKZk8wdThEdjczQm9rZTkyVGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOElHekF4VzB5SUttOWw4V3pSREdxTS9TOGl2d2pSUTVKVW9obk5CNHFucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1p4aWIreHpwandYQjV6SzA0RUF4bWJjOWpML0VZT2xJRXNsREZzcmJoND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikh1ZkVjZUhNQk5GeFhvby90dStoM0k2ZW9VS3VvY2VuV1dSUXhNekNsMGkwU1l6TDNvaUYzRGNtK0dmNGdSL1FTWTlPalJidUhLK3hSV2piNG9PK2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI0LCJhZHZTZWNyZXRLZXkiOiJaTGZPcmxPSk5TQlFOc3Uzd24valRTSFVXZjZ6dzMwaVdhQXg5NFRyWVg0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKVEJkQmUxSFJEMnlrZW1TM2xCTUZBIiwicGhvbmVJZCI6Ijc2MGY0NTVlLWYyNTItNGU4Zi05MmMwLWRmNzI3ZGQ1NWU5MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzMXFtSEpDdXhwQS9YR1pYTWR6bGtLN0tyeUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWl6ZGJSazgzSFJIMEZvMzRBdVRubkxtZm9vPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlY5TldGQTRMIiwibWUiOnsiaWQiOiI5MTcwNDcyOTQ5MTc6NjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2RhfCdm6XwnZutIPCdkLbwnZuo8J2bpfCdkYXwnZul8J2briJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGpnOC9nR0VOT3B5N0lHR0JjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTitOOHhGVDkyL3Nhc3hsekluaVBTWjRXL1hKcXNkRHJOdm5rMEJKb3pEWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNVRGZVVQZU1xRWZ2MzVBaUNwRm5NRUtkaThreitVVW1oK0FvNkZ2SWNFcFhUSS9wc05nVzFRVzZhYnFQR1llRzlFd1RlRHpsQ21PRjZ0VTFxeEwrQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IkRJTjU0eWVNK2xsOEdFMGxidkMxZ3RoVURUQmxvL2VjTWh0NGt0OVJrelhYRm52NHFlanRpK1dYeHMyK2oyU3dkUWRtUXNmZTF6N0oxbGlLU2R6TmdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE3MDQ3Mjk0OTE3OjY2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRmamZNUlUvZHY3R3JNWmN5SjRqMG1lRnYxeWFySFE2emI1NU5BU2FNdzIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTY3MDQ0NzksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSk5yIn0=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  '*S_MUSIC_PURULIA*',
  packname:  process.env.PACK_NAME || 'MADE BY SITHUM KALHARA',
  
  botname:   process.env.BOT_NAME === undefined ? "S_MUSIC_PURULIA" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'RAM CHARAN' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ S_MUSIC_PURULIA•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
