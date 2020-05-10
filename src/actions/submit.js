let unfilledMessage = require('../../config').unfilledMessage;
let starter = require('../middlewares/starter').starter;
let groupID = '-458579843';
let successMessage = require('../../config').successMessage;

let sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = bot => {
    let dataVerifier = (ctx) => {
        let members = ctx.session.members;
        
        for(let e in members) {
            if(members[e].default)
                return false;
        }
        return true;
    }

    let dataLogger = (ctx) => {
        let message = ctx.from;
    
        bot.telegram.sendMessage(groupID, message);
        bot.telegram.forwardMessage(groupID, ctx.chat.id, ctx.session.last_msg);
        bot.telegram.sendMessage(groupID, ctx.session.members);
        
        ctx.reply(successMessage);
    }
    
    bot.action('submit', ctx => {
        ctx.answerCbQuery();
        
        if (dataVerifier(ctx)){
            dataLogger(ctx);
        } else {
            ctx.deleteMessage();
            ctx.reply(unfilledMessage);
            sleep(3000);
            starter(ctx);
        }
    })
}