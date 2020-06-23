var express = require("express");
const checkAuth = require('./middleware/authverify');
const authRoute = require('./routes/auth');
const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
var app=express();
const multer = require('multer');
var port=3000
var server=app.listen(port,function() {});
console.log("Server Started at port ",port)
var libxmljs = require("libxmljs");
var bodyParser = require('body-parser');
var xmlparser = require('express-xml-bodyparser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(xmlparser());
app.use(express.json());
var parserOptions= {
    noblanks:true,
    noent:true,
    nocdata:true
}
app.get('/',function(req,res){
    res.render('index')
})
app.get('/signup',function(req,res){
  res.render('register');
});
app.get('/login',function(req,res){
  res.render('login');
});
app.get('/profile',checkAuth,function(req,res){
  res.render('profile');
});
app.get('/logout',function(req,res){
  res.redirect('/login');
});
app.get('/profile/edit',function(req,res){
  res.render('edit');
});

// SET STORAGE
var storage = multer.diskStorage({
 destination: function (req, file, cb) {
   cb(null, 'uploads')
 },
 filename: function (req, file, cb) {
   cb(null, file.fieldname + '-' + Date.now())
 }
})

var upload = multer({ storage: storage })
app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
  if(!req.file)
    {
        res.send("File was not found");
        return;
    }
    if(req.file.mimetype=='image/png'){
      res.send("uploaded")
    }
   var file=fs.readFileSync('./uploads/'+req.file.filename, {encoding:'utf8', flag:'r'});
    try{
    var xmlDoc = libxmljs.parseXmlString(file,parserOptions);
    // var gchild = xmlDoc.get('//foo');
    var children = xmlDoc.root().childNodes();
    var child = children[0];
    res.send(child.text());
    }
    catch(err){
        res.send(" Error parsing data \n",err)
    }
});
//connect to mongodb by mongoose


var upload = multer({ storage: storage })
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

//Route Middleware
app.use('/api/user',authRoute);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
