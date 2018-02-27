var markdownpdf = require("markdown-pdf")
var express = require('express')
var app = express()
var fs = require('fs')

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  var port = app.get('port').toString();
  port = port.split('').join(' ');
});

var options = {
    highlightCssPath: 'style.css',
    paperOrientation: 'portrait',
    paperBorder: '0px',
}
 
app.get('/', function (req, res) {
    console.log("Converting ...");

markdownpdf(options).from("input.md").to("output.pdf", function () {
  console.log("Done")
    var data =fs.readFileSync('./output.pdf');
res.contentType("application/pdf");
res.send(data)
});
    
});

app.get('/test', function(req, res) {
    res.send('i am fine');
});
 
