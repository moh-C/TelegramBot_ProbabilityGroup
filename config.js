let aboutMessage = `
Bot developed by Aaron (@aaro_n)
The speed might vary due to VPN's virtual endpoint. us-east-2 aws is the best regional location, thus the best speed.`;

let startMessage = 'لطفا اطلاعات گروه خود را وارد کنید. ممنون!';

let actions = [
    'captain',
    'second',
    'third',
    'fourth',
    'fifth',
    'email'
];

let customMessage = [
    'لطفا اطلاعات را صحیح وارد کنید.',
    'آدم باش🥰',
    'Bet your fingers must be hurting 😄😄',
    'Dude we could do this forever 😋😋😋😋'
];

let therapyMessage = 'Message @aaro_n if you ever need a good therapist 😉';

let helpMessage = `
داده ها مستقیم به استاد ایمیل میشود. لطفا قبل از فرستادن آنها، از صحت کامل آنها اطمینان حاصل فرمایید.
برای ویرایش یا وارد کردن اطلاعات، بر روی هر کدام از دکمه ها کلیک کرده و ربات برای شما بلافاصله پیام میفرستد.
`;

let verifyMessage = `داده ها مستقیم به استاد ایمیل میشود. لطفا قبل از فرستادن آنها، از صحت کامل آنها اطمینان حاصل فرمایید.`;

let unfilledMessage = 'حداقل یکی از فیلدها پر نشده اند.';

let successMessage = '😄😄😉اطلاعات با موفقیت ارسال شد! با تشکر';

let members = {
    captain: {
        num: 'سرگروه',
        current: false,
        default: true
    },
    second: {
        num: 'عضو 2',
        current: false,
        default: true
    },
    third: {
        num: 'عضو 3',
        current: false,
        default: true
    },
    fourth: {
        num: 'عضو 4',
        current: false,
        default: true
    },
    fifth: {
        num: 'عضو 5',
        current: false,
        default: true
    },
    email: {
        num: 'Email',
        current: false,
        default: true
    },
    initialize: {
        firstTime: true
    }
};

module.exports = {
    aboutMessage,
    startMessage,
    actions,
    customMessage,
    therapyMessage,
    helpMessage,
    verifyMessage,
    unfilledMessage,
    successMessage,
    members
}