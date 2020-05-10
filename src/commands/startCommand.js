let helpMessage = require('../../config').helpMessage;

module.exports = bot => {
    bot.command('start', ctx => {
        
        ctx.session.firstTime = true;

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