let unfilledMessage = require('../../config').unfilledMessage;
let dataVerifier = require('../middlewares/dataVerifier');
let dataLogger = require('../middlewares/dataLogger');
let starter = require('../middlewares/starter');

let sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = bot => {
    bot.action('submit', ctx => {
        ctx.answerCbQuery();
        
        if (dataVerifier(ctx)){
            dataLogger(ctx);
        } else {
            ctx.deleteMessage();
            ctx.reply(unfilledMessage);
            sleep(3000);
            starter(ctx);
        }
    })
}