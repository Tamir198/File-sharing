var express = require('express');
var app = express();
const fs = require('fs');

const path = require('path');

app.use(express.static('public'))

//TODo save image to directory
app.put('/v1/:fileName', (req, res) =>{
  //saveFile();
  fs.appendFile(req.params.fileName, req.body);
  res.send(`http://localhost:8081/${req.params.fileName}`);
 });

//send back image for the url `http://localhost:8081/fileName`
app.get('/:fileName', (req, res) =>{
 res.send(`http://localhost:8081/${req.params.fileName}`);
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})