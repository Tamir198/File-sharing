var express = require('express');
var app = express();

const cors = require('cors');
const fs = require('fs');
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req,res,next){
    next(null,'./uploads/')
  },
  filename: function(req,file,next){
    next(null,file.originalname)
  }
})

const upload = multer({storage:storage});
app.use(express.static('uploads'))
app.use(cors());

app.post('/v1/file',upload.single("image"), (req, res) =>{
setTimeout(() => fs.unlinkSync(`./uploads/${req.file.filename}`), Number(req.headers.expirationtime) * 60000);
 res.send(`http://localhost:8081/${req.file.filename}`);
});
  
app.get('/v1/:fileName', (req, res) =>{
  res.sendFile(`/${req.params.fileName}`);
 });

var server = app.listen(8081, () => {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})