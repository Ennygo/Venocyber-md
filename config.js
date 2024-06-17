//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255625774543";
global.sudo = process.env.SUDO || "2347026797342";
global.owner = process.env.OWNER_NUMBER || "2347026797342";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://venocyberqr-956a7ad0e005.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia056UG04L0lmWXBmSDBLRUoxMVlzK05aMkRWVzRldW5SU3FWUGFxaEMwdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUJVODdndmtnZHFzaUdTc1VMMm9NNVJicldWUHJlVEZMSHdQY3JGcHNnND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SmcwejUrRWQ2UTJPTHpHWGIyK3ZYY203aXU1ekdUeVBKSmtCQjNLU213PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqMS9Td3h2eUxudnVZYzhPSkl4d3VDWG5qandyK1NjMUtpekdqaFQ2dXdBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdDMmI5aS9tem9MUEpvN244V2JCcSs3RThHUlNjaG5NR1J5emZPY3Nrbk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxrZTZIQnZyUnc3ZGc1cng4RkxQTFdYVzYyNjRiVXV2SHhONmloTDFBMG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME1WNitRSjNHSndCR3doNThER0ZTYllMenFuOGZ4UFNick03cE5LelZYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSFNkeWdJTCtwNG1HUUcwQ3NXRXZPR0tLZVFiN2lrMXZqVnRPeGRqaTlFbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFBNW4vQUw5K21WTVhiT2lQUEJPS1hCdTdtdTYwTWxCcjVtaFdibWdxb294MDV1ZHZPK0laZWlhZ1BEV09IOTFJbi8wZ2NPSC9mVFBiYWY5VDVCQWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk1LCJhZHZTZWNyZXRLZXkiOiJ5dUJacnNGWG5pbnFVMUhrcmgxUEVpNWlpSVpCQ0dPdXNIV0h3T3J3Qk9BPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyRncxYUNMZFRCMlJaRzVpRVNtb0lBIiwicGhvbmVJZCI6IjU3ZjU0ZDlmLTU3YzktNDk1Ni1hMWJhLTM4YzRmYjk0NzAxYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDMjJWTUNUb25Ha0pyTzdyNkhCSEdOY1dXSE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWp6eDRzc2RBTkhBS3Z2SlJ2WVNDcDlCUHZVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJUS0IxMkFXIiwibWUiOnsiaWQiOiIyMzQ3MDI2Nzk3MzQyOjRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09mN29zRUZFSm5Va2JNR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IklRL25wR2N0NzdGY0FlWGNsNHB6SG1pV1dzZCtOdVcwUEZyNTBoYjN4ejA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkpCZDgzUlZURmxZRTN2NE9saE1kL2dlZ0l0Q2VQeFB0U2t2VGdGYVFqOFZiSG03MHBOcXRHWHRoZitnSmt6V1JtcGQwbTJjdG54L2RmcUs4MnM5S0FnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1ZHpmNUFmTjU4eWVoR0pWRDI1YXd1WjBJNFlJQjJpNmVmRERDbkdHL0JXM0s3UWZqeFJrQ3R0ZHhKcGlJd0swMEZGeUI2U3FZUmhxMWtHaE5NR0dndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwMjY3OTczNDI6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTRVA1NlJuTGUreFhBSGwzSmVLY3g1b2xsckhmamJsdER4YStkSVc5OGM5In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE3ODU2ODA2fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-ENNY'S-ASSISTANT😍",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ENNY'S ASSISTANT",
  ownername: process.env.OWNER_NAME || "YTB-ENNY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
