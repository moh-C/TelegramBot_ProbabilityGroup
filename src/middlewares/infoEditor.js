let starter = require('./starter').starter;

let infoEditor = (element, name, ctx) => {
    
    ctx.session.members[element].num = String(name);
    ctx.session.members[element].current = false;
    ctx.session.members[element].default = false;
    
    starter(ctx);
}

module.exports = {
    infoEditor
}