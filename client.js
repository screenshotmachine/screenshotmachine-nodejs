var screenshotmachine = require('screenshotmachine');

var customerKey = 'PUT_YOUR_CUSTOMER_KEY_HERE';
    secretPhrase = ''; //leave secret phrase empty, if not needed
    options = {
      //mandatory parameter
      url : 'https://www.google.com',
      // all next parameters are optional, see our website screenshot API guide for more details
      dimension : '1366xfull', // or "1366xfull" for full length screenshot
      device : 'desktop',
      format: 'png',
      cacheLimit: '0',
      delay: '200',
      zoom: '100'
    }

var apiUrl = screenshotmachine.generateScreenshotApiUrl(customerKey, secretPhrase, options);

//put link to your html code
console.log('<img src="' + apiUrl + '">');

//or save screenshot as an image
var fs = require('fs');
var output = 'output.png';
screenshotmachine.readScreenshot(apiUrl).pipe(fs.createWriteStream(output).on('close', function() {
  console.log('Screenshot saved as ' + output);
}));
