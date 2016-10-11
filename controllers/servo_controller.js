var config = require('../config');
var _eventBoard = config.eventBoard;

var five = require("johnny-five");
var servo = new five.Servo(config.eventBoard.servo.pin);

exports.index = function(req, res, next){
	res.render('servo', { eventBoard: _eventBoard });
}

exports.sweep = function(req, res){
	servo.sweep();
	//set eventBoard by default
	_eventBoard.servo = { sweep: null, stop: null, pin: 9 };
	//set new eventBoard
	_eventBoard.servo.sweep = true;
	res.render('servo', { eventBoard: _eventBoard });
}

exports.stop = function(req, res){
	servo.stop();
	//set eventBoard by default
	_eventBoard.servo = { sweep: null, stop: null, pin: 9 };
	//set new eventBoard
	_eventBoard.servo.stop = true;
	res.render('servo', { eventBoard: _eventBoard });
}