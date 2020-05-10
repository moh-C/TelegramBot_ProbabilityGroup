let starter = require('../middlewares/starter');
let __init__ = require('../middlewares/init');

module.exports = bot => {
    bot.action('mainMenu', ctx => {
        if (ctx.session.firstTime) {
            __init__(ctx);
        }

        ctx.answerCbQuery('Welcome!');
        ctx.deleteMessage();
        starter(ctx);
    })
}