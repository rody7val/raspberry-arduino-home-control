var five = require("johnny-five");
var board = new five.Board();

// controllers
var email = require('./controllers/email_controller');

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
        led.stop();
        led.on();
      });
      api.get('/stop-led', function(req, res){
        led.stop();
        led.off();
      })
      api.get('/blink-led', function(req, res){
        led.stop();
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

    // email
    api.get('/email', function(req, res, next){
      res.render('email');
      api.get('/email-send', function(req, res){
        var send = email.sendMail(req.query.email, req.query.message);
        console.log("-> ", send);
        if (send) res.render('email-send', {text: 'Alerta enviada con exito!'});
        else res.render('email-send', {text: 'Ups! Lo sentimos. Ah ocurrido un error, vuelva a intenatrlo.'});
      });
    });
  });


  return api;
}