var sms = require('../utils/sms_client');

exports.index = function(req, res, next){
	res.render('sms');
}

exports.send = function(req, res){
	var send = sms.sendSms(req.query.to, req.query.message);
	var text = (send) ? 'Alerta sms enviada con exito!' : 'Ups! Lo sentimos. Ah ocurrido un error, vuelva a intenatrlo.';
	console.log("-> ", send);
	res.render('sms-send', {text: text} );
}