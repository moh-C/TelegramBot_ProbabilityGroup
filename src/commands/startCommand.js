let helpMessage = require('../../config').helpMessage;

module.exports = bot => {
    //console.log('Yo');
    bot.start(ctx => {
        console.log('Yo');
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