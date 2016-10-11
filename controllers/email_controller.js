var email = require('../utils/email_client');

exports.index = function(req, res, next){
	res.render('email');
}

exports.send = function(req, res){
	var send = email.sendMail(req.query.email, req.query.message);
	var text = (send) ? 'Alerta email enviada con exito!' : 'Ups! Lo sentimos. Ha ocurrido un error, vuelva a intenatrlo.'
	console.log("-> ", send);
	res.render('email-send', { text: text });
}