let helpMessage = require('../../config').helpMessage;
let initialMembers = require('../../config').members;

//let __init__ = require('../middlewares/init').__init__;

module.exports = bot => {
    bot.command('start', ctx => {

        ctx.session.members = ctx.session.members || initialMembers;
        ctx.session.errCnt = ctx.session.errCnt || 0;
        ctx.session.errorMessage = ctx.session.errorMessage || [];

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