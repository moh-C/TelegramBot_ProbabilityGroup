let verifyMessage = require('../../config').verifyMessage;
let __init__ = require('../middlewares/init');

module.exports = bot => {
    bot.action('start', ctx => {
        ctx.answerCbQuery();

        if (ctx.session.firstTime) {
            __init__(ctx);
        }

        bot.telegram.sendMessage(ctx.chat.id, verifyMessage, {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Menu', callback_data: 'mainMenu' },
                        { text: 'About', callback_data: 'about' }
                    ]
                ]
            }
        })
    })
}