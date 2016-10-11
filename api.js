var five = require("johnny-five");
var board = new five.Board();

module.exports = function (app, express) {

  var api = express.Router();

  // Home page
  api.get('/', function(req, res, next){
    res.render( 'index');
  });

  board.on("ready", function() {
    
    // controllers
    var email_controllers = require('./controllers/email_controller');
    var led_controllers = require('./controllers/led_controller');
    var servo_controllers = require('./controllers/servo_controller');
    var sms_controllers = require('./controllers/sms_controller');
    
    // led
    api.get('/led', led_controllers.index);
    api.get('/led-on', led_controllers.on);
    api.get('/led-off', led_controllers.off);
    api.get('/led-blink', led_controllers.blink);

    // servo
    api.get('/servo', servo_controllers.index);
    api.get('/servo-sweep', servo_controllers.sweep);
    api.get('/servo-stop', servo_controllers.stop);

    // email
    api.get('/email', email_controllers.index);
    api.get('/email-send', email_controllers.send);

    // sms
    api.get('/sms', sms_controllers.index);
    api.get('/sms-send', sms_controllers.send);

  });


  return api;
}