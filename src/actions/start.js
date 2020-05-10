let verifyMessage = require('../../config').verifyMessage;

module.exports = bot => {
    bot.action('start', ctx => {
        ctx.answerCbQuery();
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