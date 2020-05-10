let dataVerifier = (ctx) => {
    let members = ctx.session.members;
    
    for(let e in members) {
        if(members[e].default)
            return false;
    }
    return true;
}

module.exports = {
    dataVerifier
}