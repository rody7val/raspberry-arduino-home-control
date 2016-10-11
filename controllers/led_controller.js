var config = require('../config');
var _eventBoard = config.eventBoard;

var five = require("johnny-five");
var led = new five.Led(config.eventBoard.led.pin);

exports.index = function(req, res, next){
	res.render( 'led', { eventBoard: _eventBoard });
}

exports.on = function(req, res){
	led.stop();
	led.on();
	//set eventBoard by default
	_eventBoard.led = { on: null, off: null, blink: null, pin: 13 };
	//set new eventBoard
	_eventBoard.led.on = true;
	res.render('led', { eventBoard: _eventBoard });
}

exports.off = function(req, res){
	led.stop();
	led.off();
	//set eventBoard by default
	_eventBoard.led = { on: null, off: null, blink: null, pin: 13 };
	//set new eventBoard
	_eventBoard.led.off = true;
	res.render('led', { eventBoard: _eventBoard });
}

exports.blink = function(req, res){
	led.stop();
	led.blink(500);
	//set eventBoard by default
	_eventBoard.led = { on: null, off: null, blink: null, pin: 13 };
	//set new eventBoard
	_eventBoard.led.blink = true;
	res.render('led', { eventBoard: _eventBoard });
}