
var libxmljs = require("libxmljs");
const multer = require('multer');
var express = require("express");
var app=express();
app.use(bodyParser.urlencoded({extended: true}))
var fs = require('fs');
var parse = require('xml-parser');
app.post('/submit', function(req, res) {
var product=libxmljs.parseXmlString(xml, {noent:true,noblanks:true})
var gchild = product.get('//foo');
console.log(gchild.text())
})
app.listen(4000);
