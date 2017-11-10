var markdownpdf = require("markdown-pdf")

var options = {
    highlightCssPath: 'style.css',
    paperOrientation: 'landscape',
    paperBorder: '0px',
}

console.log("Converting ...");

markdownpdf(options).from("input.md").to("output.pdf", function () {
  console.log("Done")
})
