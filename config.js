var env = process.env.NODE_ENV || 'production';
require('dotenv').config();

var config = {
    development: {
        port: 3000,
        email: {
        	user: process.env.EMAIL_USER,
        	pass: process.env.EMAIL_PASS
        }
    },
    test: {
        port: 3000,
        email: {
        	user: process.env.EMAIL_USER,
        	pass: process.env.EMAIL_PASS
        }
    },
    production: {
        port: 3000,
        email: {
        	user: process.env.EMAIL_USER,
        	pass: process.env.EMAIL_PASS
        }
   }
};

module.exports = config[env]; 