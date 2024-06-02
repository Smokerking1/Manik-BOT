module.exports = {
 config: {
   name: "prefix",
   version: "1.0",
   author: "MR.SANY",
   countDown: 5,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `Hello Brother\n\n My prefix👑 is [ . ]\n\n______________________________\n\n HEY USE MY?\nexample please type: .help - to view sure cmds\n.menu\n.TEAM69\n.GANSTER\n.ping\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥: MR.SANY ツ\n______________________________
`,
  attachment: await global.utils.getStreamFromURL("https://i.imgur.com/kmif9jH.mp4")
 });
 }
 }
} 
