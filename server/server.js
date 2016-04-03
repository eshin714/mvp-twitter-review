var express = require('express');
var bodyParser = require('body-parser');
var Twitter = require('twitter-node-client').Twitter;
var cors = require('cors');
// var config = require('./config.js')

var app = express();





// var headers = {
//   "access-control-allow-origin" : "*",
//   "access-control-allow-methods" : "GET, POST",
//   "access-control-allow-headers": "content-type",
// };

var config = {
    "consumerKey": "40HUjXzPr2vyhLOEnjsm7Nlxm",
    "consumerSecret": "31LQt4A00pqcorp6zdBvcWJIRX8t6o73EHlSNidQy1qQUJJnT7",
    "accessToken": "3255064730-Yo8w7fBj0rvecPR9ipgF5UflEyC8ts0Ta0VtG9b",
    "accessTokenSecret": "lIKiCIKVlOYXBWJ1l8Bp6VeatzdnjvN8MLIvRadSkIXZz"

}

var twitter = new Twitter(config);




var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log("Success");
    console.log('data', data);
};

app.use(bodyParser());

app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header("access-control-allow-origin", "*");
  res.header("access-control-allow-methods", "GET, POST")
  res.header("access-control-allow-headers", "Content-Type");
  next();
});

var tweets = [];
var name = "adidas";
var username = { screen_name: name, count: '30'};
var unArray = [];

twitter.getUserTimeline(username, error, function(data) {
  dataObj = JSON.parse(data);
  console.log(success(dataObj))
  for(var i = 0; i < dataObj.length; i++) {
  tweets.push(dataObj[i].text);
  // unArray.push(dataObj[i].user.name)

  console.log(tweets);
}
});

app.get("/", function(req, res){
  // res.writeHead(200, headers);
  res.send(tweets);


  // res.render(tweets);
  console.log("hello");
});

app.post("/", function(req, res) {
  console.log(req.body.username);
  // res.send('You sent the name "' + req.body.name + '".');
  // res.end(tweets);

  // unArray.push(req.body.username);
  console.log("DId this work?");
  console.log(unArray);

});






console.log('Twitter Tweet Viewer is listening on 8080');
app.listen(8080);
