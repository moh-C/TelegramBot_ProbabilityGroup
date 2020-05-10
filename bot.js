const Telegraph = require('telegraf');

const bot = new Telegraph('1139511873:AAFNoMjslfc0e0v9d0uhVSC_7iWoZg8ZLuQ'); 

let members = require('members.js');

let statefinder = res => {
    for(let e in members) {
        if(e == res) {
            members[e].current = true;
        } else members[e].current = false;
    }
    console.log(members);
}

bot.command('start', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Welcome', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'سرگروه', callback_data: 'captain' },
                ],
                [
                    { text: 'عضو 2', callback_data: 'second' }
                ],
                [
                    { text: 'عضو 3', callback_data: 'third' }
                ],
                [
                    { text: 'عضو 4', callback_data: 'fourth' }
                ],
                [
                    { text: 'عضو 5', callback_data: 'fifth' }
                ]
            ]
        }
    })
})

let actions = [
    'captain',
    'second',
    'third',
    'fourth',
    'fifth'
]

bot.action(actions, ctx => {
    ctx.answerCbQuery();
    statefinder(ctx.match);
    //console.log(ctx.match);
    bot.telegram.sendMessage(ctx.chat.id,'لطفا شماره دانشجویی سرگروه را وارد کنید: ');
})

bot.on('message', ctx=> {
    console.log(ctx.message.text);
})

bot.launch();