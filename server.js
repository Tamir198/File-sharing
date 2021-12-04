var express = require('express');
var app = express();

const cors = require('cors');
const fs = require('fs');
const multer = require("multer");
const upload = multer({dest:'uploads/'});

app.use(cors());


// //send back image for the url `http://localhost:8081/fileName`
// app.post('/v1/file', (req, res) =>{
//   console.log(req);
// //  res.send(`http://localhost:8081/${req.params.fileName}`);
//  res.send("http://localhost:8081/home.png");
// });

//send back image for the url `http://localhost:8081/fileName`
app.post('/v1/file',upload.single("image"), (req, res) =>{
  console.log(req.file);
 res.send("http://localhost:8081/home.png");
});


app.get('/:fileName', (req, res) =>{
  res.sendFile(`http://localhost:8081/home.png`);
 });

var server = app.listen(8081, () => {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})