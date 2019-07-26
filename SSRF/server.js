var fs = require('fs');
var pdf = require('html-pdf');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: './uploads/' });
const hbs = require('hbs');
const logger = require('morgan');
const serveIndex = require('serve-index');
const port =  process.env.PORT || 31337;



const app =  express();
app.use(bodyParser());  
app.set('view engine', 'hbs');  
app.use(express.static(__dirname + '/public'));  
app.set('views', __dirname + '/views'); 
app.use(logger('dev'));  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.render('index.hbs');
});
app.use('/uploads', express.static('uploads'), serveIndex('uploads', {'icons': true}));
app.post('/upload', upload.single('myFile'), (req, res) => {
    if (req.file) {
        console.log('Uploading file...');
        var filename = req.file.filename;
	var html = fs.readFileSync('./uploads/'+filename, 'utf8');
	var options = { format: 'Letter' };
	pdf.create(html, options).toFile('./uploads/'+filename+'.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
 var uploadStatus = 'File Uploaded Successfully';
});
       
    } else {
        console.log('No File Uploaded');
        var filename = 'FILE NOT UPLOADED';
        var uploadStatus = 'File Upload Failed';
    }
    
    
    res.render('index.hbs', { status: uploadStatus, filename: `PDF generated at /uploads/${filename}.pdf` });
});

app.listen(port, () => {
    console.log(`App is live on port ${port}`);
});
