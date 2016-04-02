var express = require('express');
var bodyParser = require('body-parser');
var Twitter = require('twitter-node-client').Twitter;
// var config = require('./config.js')

var app = express();

var config = {


}

var twitter = new Twitter(config);




var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    dataObj = JSON.parse(data);
    console.log("Success");
    console.log('TWEET of the day', dataObj[0].text);
};




twitter.getUserTimeline({ screen_name: 'eshinx1', count: '10'}, error, success);

app.get("/", function(req, res){
  res.send("hello")
});








console.log('Twitter Tweet Viewer is listening on 8080');
app.listen(8080);
