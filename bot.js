require('dotenv').config();

const Telegraph = require('telegraf');
const session = require('telegraf/session');
const config = require('./config');

const bot = new Telegraph(process.env.TOKEN);

bot.use(session());

let customMesasges = config.customMessage;
let therapyMessage = config.therapyMessage;

/* ****************************************************************************************************************************** */

let last_msg = null;

let infoEditor = (element, name, ctx) => {
    members[element].num = String(name);
    members[element].current = false;
    members[element].default = false;
    starter(ctx);
}

let errCnt = 0;
let errorMessages = [];

let messageProcessor = ctx => {
    let name = ctx.message.text;
    for(let e in members) {
        if(members[e].current) {
            infoEditor(e, name, ctx);
            return;
        }
    }
    errCnt++;
    if (errCnt > 8) {
        ctx.reply(therapyMessage)
        let message = ctx.message.chat.username + '\n\n' + errCnt + '\n\n' + errorMessages;
        bot.telegram.sendMessage(-458579843, message);
        return;
    }
    if(errCnt < 2) {
        ctx.reply(customMesasges[0]);
    }
    else if(errCnt < 3) {
        ctx.reply(customMesasges[1]);
    }
    else if(errCnt < 4) {
        ctx.reply(customMesasges[2]);
    }
    else {
        ctx.reply(customMesasges[3]);
    }
    starter(ctx);
    errorMessages.push(name);
}


bot.on('message', ctx => {
    messageProcessor(ctx);
    last_msg = ctx.message.message_id;
})

bot.launch();