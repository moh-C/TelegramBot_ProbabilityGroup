let statefinder = ctx => {
    let name = '';
    let res = ctx.match;
    let members = ctx.session.members;

    for(let e in members) {
        if(e == res) {
            members[e].current = true;
            name = members[e].num; 
        } else 
            members[e].current = false;
    }
    
    bot.telegram.sendMessage(ctx.chat.id, `لطفا نام ${name} را وارد/ویرایش کنید: `);
}

module.exports = {
    statefinder
}