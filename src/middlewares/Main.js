let messageProcessor = require('./messageProcessor');

module.exports = bot => {
    bot.on('message', ctx => {
        if(ctx.session.firstTime)
            __init__(ctx);
        messageProcessor(ctx);
        //last_msg = ctx.message.message_id;
    })
}