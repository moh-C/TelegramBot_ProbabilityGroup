let helpMessage = require('../../config').helpMessage;
let __init__ = require('../middlewares/init').__init__;

module.exports = bot => {
    bot.command('start', ctx => {
        __init__(ctx);
        bot.telegram.sendMessage(ctx.chat.id, helpMessage, {
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