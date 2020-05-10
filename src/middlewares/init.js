let initialMembers = require('../../config').members;

let __init__ = (ctx) => {
    ctx.session.members = initialMembers;
    ctx.session.errCnt = 0;
    ctx.session.errorMessage = [];
}

module.exports = {
    __init__
}