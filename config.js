var env = process.env.NODE_ENV || 'production';

var config = {
    development: {
        port: 3000,
        email: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
        sms: {
            accountSid: process.env.TWILIO_ACCOUNT_SID,
            authToken: process.env.TWILIO_AUTH_TOKEN,
            sendingNumber: process.env.TWILIO_NUMBER
        },
        eventBoard: {
            led: { on: null, off: true, blink: null, pin: 13 },
            servo: { sweep: null, stop: true, pin: 9 }
        }
    },
    production: {
        port: 3000,
        email: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
        sms: {
            accountSid: process.env.TWILIO_ACCOUNT_SID,
            authToken: process.env.TWILIO_AUTH_TOKEN,
            sendingNumber: process.env.TWILIO_NUMBER
        },
        eventBoard: {
            led: { on: null, off: true, blink: null, pin: 13 },
            servo: { sweep: null, stop: true, pin: 9 }
        }
   }
};

module.exports = config[env]; 