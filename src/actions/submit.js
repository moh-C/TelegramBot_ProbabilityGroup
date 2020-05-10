let unfilledMessage = require('../../config').unfilledMessage;

module.exports = bot => {
    bot.action('submit', ctx => {
        ctx.answerCbQuery();
        if (dataVerifier()){
            dataLogger(ctx);
        } else {
            ctx.deleteMessage();
            ctx.reply(unfilledMessage);
            sleep(3000);
            starter(ctx);
        }
    })
}