let messageProcessor = require('./messageProcessor');
let __init__ = require('../middlewares/init');
let last_msg = null;

module.exports = bot => {
    bot.on('message', ctx => {
        if(ctx.session.firstTime)
            __init__(ctx);
        messageProcessor(ctx);
        
        last_msg = ctx.message.message_id;
    })
}