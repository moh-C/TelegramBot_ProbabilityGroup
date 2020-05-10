require('dotenv').config();

const Telegraph = require('telegraf');
const session = require('telegraf/session');
const config = require('./config');

const bot = new Telegraph(process.env.TOKEN);

bot.use(session());

let actions = config.actions;
let customMesasges = config.customMessage;
let therapyMessage = config.therapyMessage;
let unfilledMessage = config.unfilledMessage;
let successMessage = config.successMessage;

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

let statefinder = ctx => {
    let name = '';
    let res = ctx.match;
    for(let e in members) {
        if(e == res) {
            members[e].current = true;
            name = members[e].num; 
        } else members[e].current = false;
    }
    bot.telegram.sendMessage(ctx.chat.id, `لطفا نام ${name} را وارد/ویرایش کنید: `);
}

bot.action('about', ctx => {
    ctx.answerCbQuery();
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, aboutMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Menu', callback_data: 'start' }
                ]
            ]
        }
    })
})

bot.action(actions, ctx => {
    ctx.deleteMessage();
    ctx.answerCbQuery();
    statefinder(ctx);
})

function dataVerifier() {
    for(let e in members) {
        if(members[e].default)
            return false;
    }
    return true;
}

bot.action('submit', ctx => {
    ctx.answerCbQuery();
    //dataLogger(ctx);
    if (dataVerifier()){
        dataLogger(ctx);
    } else {
        ctx.deleteMessage();
        ctx.reply(unfilledMessage);
        sleep(3000);
        starter(ctx);
    }
})

function dataLogger(ctx) {
    let message = ctx.from;
    bot.telegram.sendMessage(-458579843, message);
    bot.telegram.forwardMessage(-458579843, ctx.chat.id, last_msg);
    bot.telegram.sendMessage(-458579843, members);
    ctx.reply(successMessage);
}

bot.on('message', ctx => {
    messageProcessor(ctx);
    last_msg = ctx.message.message_id;
})

bot.launch();