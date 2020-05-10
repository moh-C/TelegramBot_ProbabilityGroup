let messageProcessor = require('../middlewares/messageProcessor').messageProcessor;
let last_msg = null;

module.exports = bot => {
    bot.on('message', ctx => {
        messageProcessor(ctx);
    })
}