module.exports = {
    config: {
        name: "chat",
        version: "1.0",
        author: "MD.MANIK KHAN",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "kemon aso") return message.reply("আলহামদুলিল্লাহ ভালো🥰আপনি কেমন আছেন");
}
};
