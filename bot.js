require('dotenv').config();

const Telegraph = require('telegraf');
const bot = new Telegraph(process.env.TOKEN);
const session = require('telegraf/session');
bot.use(session());

let initialMembers = require('./config').members;

bot.use((ctx, next) => {
    ctx.session.members = ctx.session.members || initialMembers;
    ctx.session.errCnt = ctx.session.errCnt || 0;
    ctx.session.errorMessage = ctx.session.errorMessage || [];
    ctx.session.last_msg = ctx.session.last_msg || ctx.message.message_id;
    next();
})

const messages = require('./src/commands/message');
messages(bot);

const mainMenu = require('./src/actions/mainMenu');
mainMenu(bot);

const about = require('./src/actions/about');
about(bot);

const startAction = require('./src/actions/start');
startAction(bot);

const submit = require('./src/actions/submit');
submit(bot);

const otherActions = require('./src/actions/otherActions');
otherActions(bot);

const startCommand = require('./src/commands/startCommand');
startCommand(bot);


bot.launch();