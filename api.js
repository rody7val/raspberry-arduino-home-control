var five = require("johnny-five");
var board = new five.Board();

module.exports = function (app, express) {

  var api = express.Router();

  // Home page
  api.get('/', function(req, res, next){
    res.render( 'index');
  });

	board.on("ready", function() {

	  var led = new five.Led(13);

  	api.get('/start', function(req, res){
  		led.stop()
  		led.on();
  	});

  	api.get('/stop', function(req, res){
  		led.stop()
			led.off();
  	})

		api.get('/blink', function(req, res){
			led.stop()
			led.blink(500);
  	})

	});


  return api;
}