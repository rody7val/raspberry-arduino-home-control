var nodemailer = require('nodemailer');
var config = require('../config');
var _status = null;

module.exports = {
	sendMail: function (to, msj) {

		var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: config.email.user,
                pass: config.email.pass
            },
            debug: true,
            tls: {rejectUnauthorized: false} 
        });

    	var mailOptions = {
    	    from: 'alarmas_tecnicas@gmail.com',
    	    to: to,
    	    subject: 'Email-Alert',
    	    text: msj
    	}

    	transporter.sendMail(mailOptions, function (error, info) {
    	    if (error) {
    	        _status = null;
                console.log(error);
                return;
    	    }
    	    _status = true;
            console.log('Message sent: ' + info.response);
            return;
    	});

        return { _status };
	}
}