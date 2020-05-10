require('dotenv').config();

const Telegraph = require('telegraf');
const session = require('telegraf/session');
const config = require('./config');

const bot = new Telegraph(process.env.TOKEN);

bot.use(session());

bot.on('message', ctx => {
    //console.log();
})

bot.launch();