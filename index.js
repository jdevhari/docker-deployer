var express = require('express');
var shell = require('shelljs');

var DEFAULT_PORT = 9080;
var PORT = process.env.PORT || DEFAULT_PORT;
var app = express();

app.post('/deploy',function(req,res){
  console.log("Deploy");
  if (shell.exec('./deploy.sh').code != 0) {
    console.log('error running script');
  }
  res.end("ok");
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
