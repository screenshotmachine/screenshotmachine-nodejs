var screenshotmachine = require('screenshotmachine');

var customerKey = 'PUT_YOUR_CUSTOMER_KEY_HERE';
    secretPhrase = ''; //leave secret phrase empty, if not needed
    options = {
      //mandatory parameter
      url : 'https://www.google.com',
      // all next parameters are optional, see our website to PDF API guide for more details
      paper : 'letter',
      orientation : 'portrait',
      media: 'print',
      bg: 'nobg',
      delay: '2000',
      scale: '50'
    }

var pdfApiUrl = screenshotmachine.generatePdfApiUrl(customerKey, secretPhrase, options);

//save PDF file
var fs = require('fs');
var output = 'output.pdf';
screenshotmachine.readScreenshot(pdfApiUrl).pipe(fs.createWriteStream(output).on('close', function() {
  console.log('Pdf saved as ' + output);
}));
