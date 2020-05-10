let actions = require('../../config').actions;
let statefinder = require('../middlewares/stateFinder').statefinder;

module.exports = bot => {
    bot.action(actions, ctx => {
        ctx.deleteMessage();
        ctx.answerCbQuery();
        statefinder(ctx);
    })
}