let customMesasges = require('../../config').customMessage;
let therapyMessage = require('../../config').therapyMessage;
let starter = require('../middlewares/starter').starter;
let infoEditor = require('./infoEditor').infoEditor;

module.exports.messageProcessor = ctx => {
    
    let name = ctx.message.text;
    let members = ctx.session.members;

    for(let e in members) {
        if(members[e].current) {
            infoEditor(e, name, ctx);
            return;
        }
    }
    
    ctx.session.errCnt++;

    if (ctx.session.errCnt > 8) {
        ctx.reply(therapyMessage)
        return;
    }

    if(ctx.session.errCnt < 2) {
        ctx.reply(customMesasges[0]);
    } else if(ctx.session.errCnt < 3) {
        ctx.reply(customMesasges[1]);
    } else if(ctx.session.errCnt < 4) {
        ctx.reply(customMesasges[2]);
    } else {
        ctx.reply(customMesasges[3]);
    }

    starter(ctx);
    //ctx.session.errorMessage.push(name);
}