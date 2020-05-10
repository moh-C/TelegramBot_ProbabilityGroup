let aboutMessage = require('../../config').aboutMessage;

module.exports = bot => {
    bot.action('about', ctx => {
        ctx.answerCbQuery();
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.chat.id, aboutMessage, {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Menu', callback_data: 'start' }
                    ]
                ]
            }
        })
    })
}