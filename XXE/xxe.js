var express = require("express");
const checkAuth = require('./middleware/authverify');
const authRoute = require('./routes/auth');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
var app=express();
var port=3000
var server=app.listen(port,function() {});
console.log("Server Started at port ",port)
var libxmljs = require("libxmljs");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
var parserOptions= {
    noblanks:true,
    noent:true,
    nocdata:true
}
app.get('/',function(req,res){
    res.send("Please Enter a name with POST")
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
app.post('/submit', function(req, res) {
    var name = req.body.name;
    try{
    var xmlDoc = libxmljs.parseXmlString(name,parserOptions);
    var gchild = xmlDoc.get('//name');
    res.send(gchild.text());
    }
    catch(err){
        res.send(" Error parsing data \n",err)
    }
});
//connect to mongodb by mongoose

mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

//Route Middleware
app.use('/api/user',authRoute);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
