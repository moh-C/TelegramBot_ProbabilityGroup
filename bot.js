const Telegraph = require('telegraf');

const bot = new Telegraph('1139511873:AAFNoMjslfc0e0v9d0uhVSC_7iWoZg8ZLuQ');

let starter = ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Welcome', {
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
                    { text: 'Submit', callback_data: 'start'}
                ]
            ]
        }
    })
}

let members = {
    captain: {
        num: 'سرگروه',
        current: false
    },
    second: {
        num: 'عضو 2',
        current: false
    },
    third: {
        num: 'عضو 3',
        current: false
    },
    fourth: {
        num: 'عضو 4',
        current: false
    },
    fifth: {
        num: 'عضو 5',
        current: false
    },
    email: {
        num: 'Email',
        current: false
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
    starter(ctx);
}

let messageProcessor = (ctx) => {
    let name = ctx.message.text;
    for(let e in members) {
        if(members[e].current) {
            infoEditor(e, name, ctx);
            return;
        }
    }
    starter(ctx);
}

let statefinder = ctx => {
    let name = '';
    let res = ctx.match;
    //console.log(res);
    for(let e in members) {
        //console.log(e);
        if(e == res) {
            members[e].current = true;
            name = members[e].num; 
        } else members[e].current = false;
    }
    console.log(members);
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

bot.on('message', ctx => {
    messageProcessor(ctx);
})

bot.launch();