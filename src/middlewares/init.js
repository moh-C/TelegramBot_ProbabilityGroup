let initialMembers = require('../../config').members;

let __init__ = (ctx) => {
    ctx.session.members = initialMembers;
    ctx.session.firstTime = false;
}

module.exports = {
    __init__
}