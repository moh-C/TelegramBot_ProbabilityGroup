let successMessage = require('../../config').successMessage;
let groupID = '-458579843';

let dataLogger = (ctx) => {
    let message = ctx.from;
    bot.telegram.sendMessage(groupID, message);
    bot.telegram.forwardMessage(groupID, ctx.chat.id, last_msg);
    bot.telegram.sendMessage(groupID, members);
    ctx.reply(successMessage);
}

module.exports = {
    dataLogger
}