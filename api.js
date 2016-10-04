var five = require("johnny-five");
var board = new five.Board();

module.exports = function (app, express) {

  var api = express.Router();

  board.on("ready", function() {

    // Home page
    api.get('/', function(req, res, next){
      res.render( 'index');
    });

    // led
    api.get('/led', function(req, res, next){
      res.render( 'led');
        var led = new five.Led(13);
        api.get('/start-led', function(req, res){
          led.stop()
          led.on();
        });
        api.get('/stop-led', function(req, res){
          led.stop()
          led.off();
        })
        api.get('/blink-led', function(req, res){
          led.stop()
          led.blink(500);
        })   
    });

    // servo
    api.get('/servo', function(req, res, next){
      res.render('servo');
      var servo = new five.Servo(9);
      api.get('/sweep-servo', function(req, res){
        servo.sweep();
      });
      api.get('/stop-servo', function(req, res){
        servo.stop();
      });
    });

  });


  return api;
}