const Telegraph = require('telegraf');

const bot = new Telegraph('1139511873:AAFNoMjslfc0e0v9d0uhVSC_7iWoZg8ZLuQ');

let starter = ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'لطفا اطلاعات گروه خود را وارد کنید. ممنون!', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: String(members.captain.num), callback_data: 'captain' },
                ],
                [
                    { text: String(members.second.num), callback_data: 'second' },
                    { text: String(members.third.num), callback_data: 'third' }
                ],
                [
                    { text: String(members.fourth.num), callback_data: 'fourth' },
                    { text: String(members.fifth.num), callback_data: 'fifth' }
                ],
                [
                    { text: String(members.email.num), callback_data: 'email' }
                ],
                [
                    { text: 'Submit', callback_data: 'submit'}
                ]
            ]
        }
    })
}

let members = {
    captain: {
        num: 'سرگروه',
        current: false,
        default: true
    },
    second: {
        num: 'عضو 2',
        current: false,
        default: true
    },
    third: {
        num: 'عضو 3',
        current: false,
        default: true
    },
    fourth: {
        num: 'عضو 4',
        current: false,
        default: true
    },
    fifth: {
        num: 'عضو 5',
        current: false,
        default: true
    },
    email: {
        num: 'Email',
        current: false,
        default: true
    }
};

let actions = [
    'captain',
    'second',
    'third',
    'fourth',
    'fifth',
    'email'
]

let infoEditor = (element, name, ctx) => {
    members[element].num = String(name);
    members[element].current = false;
    members[element].default = false;
    console.log(members);
    starter(ctx);
}

let customMesasges = [
    'لطفا اطلاعات را صحیح وارد کنید.',
    'آدم باش🥰',
    'Dude we could do this forever 😋😋😋😋',
    'Bet your fingers must be hurting 😄😄'
]

let errCnt = 0;
let errorMessages = [];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

async function messageProcessor (ctx) {
    let name = ctx.message.text;
    for(let e in members) {
        if(members[e].current) {
            infoEditor(e, name, ctx);
            return;
        }
    }
    errCnt++;
    if (errCnt > 10) {
        
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
    //await sleep(3000);
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

bot.command('start', ctx => {
    starter(ctx);
})

bot.command('start', ctx => {
    starter(ctx);
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
    if (dataVerifier()){
        ctx.reply('اطلاعات ارسال شد! با تشکر')
        bot.telegram.sendMessage(-458579843, members);
    } else {
        ctx.deleteMessage();
        ctx.reply('حداقل یکی از فیلدها پر نشده اند.')
        sleep(3000);
        starter(ctx);
    }
})

bot.on('message', ctx => {
    messageProcessor(ctx);
})

bot.launch();