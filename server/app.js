var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.listen(process.env.PORT || 3000, function() {
  console.log('server is listening on port 3000');
});//end server listening

app.get('/', function(req, res){
  console.log("base url hit");
  res.sendFile(path.resolve('public/index.html'));
});//end base url

app.use(express.static('public'));

app.post('/texter', urlencodedParser, function(req, res){
  console.log('texter hit', req.body);
  // res.send ('you sent a ' + req.body.creature);
});
