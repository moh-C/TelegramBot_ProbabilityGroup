let starter = require('../middlewares/starter');

module.exports = bot => {
    bot.action('mainMenu', ctx => {
        ctx.answerCbQuery('Welcome!');
        ctx.deleteMessage();
        starter(ctx);
    })
}