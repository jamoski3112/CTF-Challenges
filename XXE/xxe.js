var express = require("express");
var app=express();
var port=3000
var server=app.listen(port,function() {});
console.log("Server Started at port ",port)
var libxmljs = require("libxmljs");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var parserOptions= {
    noblanks:true,
    noent:true,
    nocdata:true
}
app.get('/',function(req,res){
    res.send("Please Enter a name with POST")
})
app.post('/', function(req, res) {
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