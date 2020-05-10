let customMesasges = require('../../config').customMessage;
let therapyMessage = require('../../config').therapyMessage;
let starter = require('../middlewares/starter');
let groupID = '-458579843';

let messageProcessor = ctx => {
    
    let name = ctx.message.text;
    let count = ctx.session.errCnt;
    let errMsg = ctx.session.errorMessage;
    let members = ctx.session.members;

    for(let e in members) {
        if(members[e].current) {
            infoEditor(e, name, ctx);
            return;
        }
    }
    
    count++;

    if (count > 8) {
        ctx.reply(therapyMessage)
        let message = ctx.message.chat.username + '\n\n' + count + '\n\n' + errMsg;
        bot.telegram.sendMessage(groupID, message);
        return;
    }

    if(count < 2) {
        ctx.reply(customMesasges[0]);
    } else if(count < 3) {
        ctx.reply(customMesasges[1]);
    } else if(count < 4) {
        ctx.reply(customMesasges[2]);
    } else {
        ctx.reply(customMesasges[3]);
    }

    starter(ctx);
    errMsg.push(name);
}

module.exports = {
    messageProcessor
}