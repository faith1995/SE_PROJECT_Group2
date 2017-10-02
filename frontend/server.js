var express = require('express');
var http = require('http');

var path = require('path');
var compression = require('compression');

var app = express();
var server = http.createServer(app);

var bodyParser = require('body-parser');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



/*app.get('*.js', function (req, res, next) {
  res.setHeader('Content-Type', 'text/javascript');
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});*/

app.get('*.js', function (req, res, next) {
  //res.setHeader('X-Content-Type-Options': 'nosniff');
  res.setHeader('Content-Type', 'text/javascript');
  //res.setHeader('Cache-Control', 'no-cache');
  //req.url = req.url + '.gz';
  //res.set('Content-Encoding', 'gzip');
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/api/sendmail', function(req, res) {
    console.log('ddd');
    console.log(req.body);
    let mail = req.body;
    const nodemailer = require('nodemailer');
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: '785976@students.wits.ac.za',
          clientId: ' 958235576899-1qo3bto5t690eh7ig99nk0tuknatu9n8.apps.googleusercontent.com ',
          clientSecret: ' 8fQCkashFHucSPYCqeEdypBk ',
          refreshToken: '1/cFvh7qzJ01kPacKt_rmfOn_dtstigLeqouH2q1MScLo',
          accessToken: 'ya29.GlvVBEZ3vgmmOKGJGDfq9lfi11N34qHIJGoxu9ozNc7Fc2FtidAbQq2tt8bp7lpjbXciGxbmOxDpMmaNWoHKaOR4r7wa1M6DmQTElESxj-Hpqw3BaVF-4tynBu4T',
          expires: 3600
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '<785976@students.wits.ac.za>', // sender address
        to: mail.email,
        //to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
        subject: 'Welcome to AvoHealth  ✔', // Subject line
        //text: 'Testing with oauth2 access tokens ?', // plain text body
        html: '<b>Welcome '+mail.firstname+'</b><br/> <b>Email: '+mail.email+'</b><br/><br/> ' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });

    res.send('Email Sent');
});


var PORT = process.env.PORT || 3022


/* Start server */
server.listen(PORT, function (){
  console.log('Production Express server running at localhost:' + PORT);
});

module.exports = app;