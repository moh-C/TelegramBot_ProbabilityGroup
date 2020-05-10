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
                    { text: 'بازگشت', callback_data: 'start'}
                ]
            ]
        }
    })
}

let members = {
    captain: {
        num: 'سرگروه',
        email: 'hi@hi.com',
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
    }
};

let actions = [
    'captain',
    'second',
    'third',
    'fourth',
    'fifth'
]

let statefinder = ctx => {
    let name = '';
    let res = ctx.match;
    for(let e in members) {
        if(e == res) {
            members[e].current = true;
            name = members[e].num; 
        } else members[e].current = false;
    }
    bot.telegram.sendMessage(ctx.chat.id, `لطفا نام ${name} را وارد کنید: `);
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

function infoEditor(element, name) {
    members[element].num = String(name);
    members[element].current = false;
}

function messageProcessor(ctx) {
    let name = ctx.message.text;
    for(let e in members) {
        if(members[e].current) {
            infoEditor(e, name);
            return;
        }
    }
    starter(ctx);
}

bot.on('message', ctx => {
    messageProcessor(ctx);
    console.log(members);
})

bot.launch();