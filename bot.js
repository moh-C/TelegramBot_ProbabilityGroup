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

let members = module.exports = {
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

let statefinder = (res, ctx) => {
    let name = '';
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

let actions = [
    'captain',
    'second',
    'third',
    'fourth',
    'fifth'
]

bot.command('start', ctx => {
    starter(ctx);
})

bot.action(actions, ctx => {
    ctx.deleteMessage();
    ctx.answerCbQuery();
    statefinder(ctx.match, ctx);
})

bot.on('message', ctx=> {
    console.log(ctx.message.text);
})

bot.launch();