let messageProcessor = require('../middlewares/messageProcessor').messageProcessor;
let last_msg = null;

module.exports = bot => {
    bot.on('message', ctx => {
        messageProcessor(ctx);
        ctx.session.last_msg = ctx.session.last_msg || ctx.message.message_id;
    })
}