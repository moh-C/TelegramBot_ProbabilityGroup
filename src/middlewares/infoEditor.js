let starter = require('./starter');

let infoEditor = (element, name, ctx) => {
    members[element].num = String(name);
    members[element].current = false;
    members[element].default = false;
    starter(ctx);
}

module.exports = {
    infoEditor
}