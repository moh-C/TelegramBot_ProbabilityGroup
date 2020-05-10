require('dotenv').config();

const Telegraph = require('telegraf');
const bot = new Telegraph(process.env.TOKEN);

const session = require('telegraf/session');
bot.use(session());

const startCommand = require('./src/commands/startCommand');
startCommand(bot);

bot.on('message', ctx => {
    console.log(ctx.session);
})

bot.launch();