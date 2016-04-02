var express = require('express');
var bodyParser = require('body-parser');
var twitNode = require('twitter-node-client');

var app = express();


app.get("/", function(req, res){
  res.send("hello")
})



console.log('Twitter Tweet Viewer is listening on 8080');
app.listen(8080);
