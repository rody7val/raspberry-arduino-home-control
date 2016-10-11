var client = require('twilio')(config.sms.accountSid, config.sms.authToken);
var admins = require('../administrators.json');
var config = require('../config');
var _status = null;

function formatMessage(errorToReport) {
  return '[Esto es una prueba] ALERTA! Al parecer, el servidor está ' +
    'teniendo problemas. Excepción: ' + errorToReport +
    '. Ve a: http://newrelic.com ' +
    'por mas detalles.';
};

var sendSms = function(to, message) {
    client.messages.create({
      body: message,
      to: to,
      from: config.sms.sendingNumber
      // mediaUrl: 'http://www.yourserver.com/someimage.png'
    }, function(err, data) {
      if (err) {
        console.error('Could not notify administrator');
        console.error(err);
        _status = null;
      } else {
        console.log('Administrator notified');
        _status = true;
      }
    });
    return _status
};

var notifyOnError = function(appError, request, response, next) {
  admins.forEach(function(admin) {
    var messageToSend = formatMessage(appError.message);
    sendSms(admin.phoneNumber, messageToSend);
  });
  next(appError);
};

module.exports = {
  sendSms: sendSms,
  notifyOnError: notifyOnError
};