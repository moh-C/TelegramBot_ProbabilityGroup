let messageProcessor = require('./messageProcessor');

module.exports = bot => {
    bot.on('message', ctx => {
        messageProcessor(ctx);
        //last_msg = ctx.message.message_id;
    })
}