let successMessage = require('../../config').successMessage;

let dataLogger = (ctx) => {
    let message = ctx.from;
    bot.telegram.sendMessage(-458579843, message);
    bot.telegram.forwardMessage(-458579843, ctx.chat.id, last_msg);
    bot.telegram.sendMessage(-458579843, members);
    ctx.reply(successMessage);
}

module.exports = {
    dataLogger
}