require('dotenv').config();

const Telegraph = require('telegraf');
const bot = new Telegraph(process.env.TOKEN);


const session = require('telegraf/session');
bot.use(session());

const startCommand = require('./src/commands/startCommand');
startCommand(bot);

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


bot.launch();