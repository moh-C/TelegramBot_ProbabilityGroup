let startMessage = require('../../config').startMessage;
let extraMember = require('../../config').members;

module.exports.starter = ctx => {
    let members = ctx.session.members;
    console.log(ctx.session);

    //let capNum = ctx.session.members.captain.num || extraMember.captain.num;

    ctx.reply(ctx.chat.id, startMessage, {
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
                ],
                [
                    { text: 'بازگشت', callback_data: 'start'}
                ]
            ]
        }
    })
}