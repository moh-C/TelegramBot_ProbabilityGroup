let actions = require('../../config').actions;

module.exports = bot => {
    bot.action(actions, ctx => {
        ctx.deleteMessage();
        ctx.answerCbQuery();
        statefinder(ctx);
    })
}