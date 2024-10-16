const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="curzonoderneisse@gmail.com"
global.location="Lome,Togo."


global.mongodb= process.env.MONGODB_URI || "mongodb://ufcngvivxrpkob45rmb0:sCyTB75IotGZTepszZR@bvm3mzejjuoe1qxjrvm1-mongodb.services.clever-cloud.com:2843/bvm3mzejjuoe1qxjrvm1"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb://ufcngvivxrpkob45rmb0:sCyTB75IotGZTepszZR@bvm3mzejjuoe1qxjrvm1-mongodb.services.clever-cloud.com:2843/bvm3mzejjuoe1qxjrvm1"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Abidjan";
global.github=process.env.GITHUB|| "https://github.com/Popp100/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://wa.me/224620780851";
global.website=process.env.GURL || "https://wa.me/224620780851" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Itto Rasetsu" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "224620780851";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/FnwDzvJ/0237f4e2341ed7745542fbd2bdd6947b.png" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_21_10_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA0NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDczLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNixcbiAgICAgICAgODMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDY3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NixcbiAgICAgICAgMTcsXG4gICAgICAgIDgzLFxuICAgICAgICAzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgyLFxuICAgICAgICA5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4OSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTksXG4gICAgICAgIDM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMxLFxuICAgICAgICA1MixcbiAgICAgICAgMjI2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDk1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQxLFxuICAgICAgICAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgOCxcbiAgICAgICAgODksXG4gICAgICAgIDk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDExMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDksXG4gICAgICAgIDI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI2LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImRUbXBtd1FEd0VGaC91c1VKRktSSml6WGVrNStnU3pxcGtxbTBOeEFlR2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjI0NjIwNzgwODUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEQUY0RThCMEM3OEQ4NTU1MjlBNUI0OUVBRkNGRUE3QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjkwNzc2NjhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjQ2MjA3ODA4NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhDNjI1QkQ5NkIzRjBFMDk5RUQ0QkExMDQ1QUZFRDQ3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTA3NzY2OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5YlZ0Mmxlb1FacVJZTkl0UG1fSUR3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjBmZDdjYmRkLWY1NWEtNGExYy1iNDllLWYwNmY2NWRjZjdjM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NSxcbiAgICAgIDEwMCxcbiAgICAgIDE2NSxcbiAgICAgIDEyNSxcbiAgICAgIDE5LFxuICAgICAgMTg5LFxuICAgICAgMTkxLFxuICAgICAgNTIsXG4gICAgICAyMTksXG4gICAgICAxMixcbiAgICAgIDYsXG4gICAgICA1NyxcbiAgICAgIDMwLFxuICAgICAgNzEsXG4gICAgICAxNTcsXG4gICAgICAwLFxuICAgICAgOTUsXG4gICAgICAxMDQsXG4gICAgICAxOTAsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzMsXG4gICAgICA2MSxcbiAgICAgIDMyLFxuICAgICAgMjI0LFxuICAgICAgMTk2LFxuICAgICAgMTg4LFxuICAgICAgMjIzLFxuICAgICAgMjA4LFxuICAgICAgMTUsXG4gICAgICAxNTksXG4gICAgICAyNDksXG4gICAgICAxMTAsXG4gICAgICAxNDksXG4gICAgICAyNDMsXG4gICAgICA3NyxcbiAgICAgIDI0NCxcbiAgICAgIDEyMyxcbiAgICAgIDIxOCxcbiAgICAgIDIzNyxcbiAgICAgIDc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjk3Vzk2TVIyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjQ2MjA3ODA4NTE6NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjgzODg1MzU4NjEyNTA3Ojc2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIsmq4bSb4bSb4bSP4bScIMqA4bSAc+G0h+G0m3PhtJxcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKakJzTGtCRUovRHZyZ0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFzQ2M1UmZ1d3krKzgzbjduNzMvbHg1OHJzbWZ4WnlUTDFDeW5teFlQUXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwienFVbXBaL0dhVytGall2ajcvT0o4N2J5V21jNEdGalUrdnVKUWl6MjRnRnBhL29KamJmTTQ2MXNHcGhIVTd3eEdCNS9nRFJOOUQ5WE1XOGlYL3NFQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidVFNdDltck1zVWRmOTU5bUtHanVQSFNhQUlhd1pIS0JYQXN4ZG11aENOOC9hNkxobm9hR20xTDJSRWN6Z3k5aGZEVG5WYkNYcGtvbTVoZ3c5K215alE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI0NjIwNzgwODUxOjc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTA3NzY2NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZjQlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRmNCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSXVuR29OUFZXRGc1VzRPT0hud3Y5U213MFpIQjFveVJrT00wUEVzS053VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozODg3Njc4OTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyODM2NTgxMTEyM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Itto Rasetsu ® 』```" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Itto Rasetsu ® 』```",
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Rasetsu-md",
  ownername:process.env.OWNER_NAME|| "Itto Rasetsu",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
