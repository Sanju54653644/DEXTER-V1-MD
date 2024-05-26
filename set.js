const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUdMOW0yN1ZYNThybXpuYUdtc3N2SC9aZEFBNkI4dGs1MjJzUVBOU0IzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU9LNGpQUXVkRWtsbHl1b1Y3ZDFPUDk5cno3WUpVZzVSRk83WUpJc2RScz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRXVNK2l2V1VBNnZjdjRaYVpZcDRkZFhDUzZlZng2c2tObmkvSDFHMlVnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMcmJHa201cGM4Qk8vcTR6a3N4cFhkMiszaFpIVGUzTUUyZmNlajBRLzFNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVCUVZmV0VINjl5Y1h5N0VHcUhyVVJ4M2toWHJ4ZE1mSGZUL05DY1BVMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhoRnBhWWlnZ2dJd2k3WFdXenRpOUZhcTFKZk8wdThEdjczQm9rZTkyVGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOElHekF4VzB5SUttOWw4V3pSREdxTS9TOGl2d2pSUTVKVW9obk5CNHFucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1p4aWIreHpwandYQjV6SzA0RUF4bWJjOWpML0VZT2xJRXNsREZzcmJoND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikh1ZkVjZUhNQk5GeFhvby90dStoM0k2ZW9VS3VvY2VuV1dSUXhNekNsMGkwU1l6TDNvaUYzRGNtK0dmNGdSL1FTWTlPalJidUhLK3hSV2piNG9PK2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI0LCJhZHZTZWNyZXRLZXkiOiJaTGZPcmxPSk5TQlFOc3Uzd24valRTSFVXZjZ6dzMwaVdhQXg5NFRyWVg0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKVEJkQmUxSFJEMnlrZW1TM2xCTUZBIiwicGhvbmVJZCI6Ijc2MGY0NTVlLWYyNTItNGU4Zi05MmMwLWRmNzI3ZGQ1NWU5MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzMXFtSEpDdXhwQS9YR1pYTWR6bGtLN0tyeUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWl6ZGJSazgzSFJIMEZvMzRBdVRubkxtZm9vPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlY5TldGQTRMIiwibWUiOnsiaWQiOiI5MTcwNDcyOTQ5MTc6NjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2RhfCdm6XwnZutIPCdkLbwnZuo8J2bpfCdkYXwnZul8J2briJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGpnOC9nR0VOT3B5N0lHR0JjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTitOOHhGVDkyL3Nhc3hsekluaVBTWjRXL1hKcXNkRHJOdm5rMEJKb3pEWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNVRGZVVQZU1xRWZ2MzVBaUNwRm5NRUtkaThreitVVW1oK0FvNkZ2SWNFcFhUSS9wc05nVzFRVzZhYnFQR1llRzlFd1RlRHpsQ21PRjZ0VTFxeEwrQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IkRJTjU0eWVNK2xsOEdFMGxidkMxZ3RoVURUQmxvL2VjTWh0NGt0OVJrelhYRm52NHFlanRpK1dYeHMyK2oyU3dkUWRtUXNmZTF6N0oxbGlLU2R6TmdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE3MDQ3Mjk0OTE3OjY2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRmamZNUlUvZHY3R3JNWmN5SjRqMG1lRnYxeWFySFE2emI1NU5BU2FNdzIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTY3MDQ0NzksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSk5yIn0=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "⚔  RAM CHARAN ⚔",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "917047294917",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "oui",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'DEXTER-MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || 'https://static.animecorner.me/2023/08/op2.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
