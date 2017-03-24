var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var cors = require('cors')

//app.use(cors())

app.use(function (req, res, next){
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Accept");
  next()
})

app.get('/profiles', function(req, res){
  res.json([
      {name: 'David', age: 30, hobbies: ['swimming', 'jogging'], bio: 'Enjoy sport'}, 
      {name: 'Sarah', age: 32, hobbies: ['reading', 'gardening', 'parenting'], bio: 'Enjoy golden peaceful time'}
  ])
})

var server = app.listen(3000, function(){
  console.log('Server listening on port 3000');
})
