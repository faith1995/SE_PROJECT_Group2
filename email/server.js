var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

/*app.get('/', function(req, res) {
  res.send('Hello World');
});*/


app.post('/sendmail', function(req, res) {
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
        to: 'teenomanhema@gmail.com',
        //to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
        subject: mail.name + '  ✔', // Subject line
        text: 'Testing with oauth2 access tokens ?', // plain text body
        //html: '<b>Name: '+mail.name+'</b><br/> <b>Email: '+mail.email+'</b><br/> <b>Message: '+mail.message+'</b><br/> ' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });

    res.send('Email Sent');
})

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("http://%s:%s", host, port);
});
