# screenshotmachine-nodejs

This demo shows how to call online screenshot machine API using Node.js - JavaScript run-time environment.

## Installation

Install Node.js package:

```javascript
npm install screenshotmachine --save
```

First, you need to create a free/premium account at [www.screenshotmachine.com](https://www.screenshotmachine.com) website. After registration, you will see your customer key in your user profile. Also secret phrase is maintained here. Please, use secret phrase always, when your API calls are called from publicly available websites.  

Set-up your customer key and secret phrase (if needed) in the script:

```javascript
var customerKey = 'PUT_YOUR_CUSTOMER_KEY_HERE';
    secretPhrase = ''; //leave secret phrase empty, if not needed
```

Set other options to fulfill your needs: 

```javascript
    options = {
      //mandatory parameter
      url : 'https://www.google.com',
      // all next parameters are optional, see our API guide for more details
      dimension : '1366xfull', // or "1366xfull" for full length screenshot
      device : 'desktop',
      format: 'png',
      cacheLimit: '0',
      delay: '200'
    }
```
More info about options can be found in our [API doc](https://www.screenshotmachine.com/api.php).  

 Sample code
-----

```javascript
var screenshotmachine = require('screenshotmachine');

var customerKey = 'PUT_YOUR_CUSTOMER_KEY_HERE';
    secretPhrase = ''; //leave secret phrase empty, if not needed
    options = {
      //mandatory parameter
      url : 'https://www.google.com',
      // all next parameters are optional, see our API guide for more details
      dimension : '1366xfull', // or "1366xfull" for full length screenshot
      device : 'desktop',
      format: 'png',
      cacheLimit: '0',
      delay: '200',
      zoom: '100'
    }

var apiUrl = screenshotmachine.generateApiUrl(customerKey, secretPhrase, options);

//put link to your html code
console.log('<img src="' + apiUrl + '">');   
```
Generated ```apiUrl```  link can be placed in ```<img>``` tag or used in your business logic later.

If you need to store captured screenshot as an image, just call:

```javascript
var screenshotmachine = require('screenshotmachine');

var customerKey = 'PUT_YOUR_CUSTOMER_KEY_HERE';
    secretPhrase = ''; //leave secret phrase empty, if not needed
    options = {
      //mandatory parameter
      url : 'https://www.google.com',
      // all next parameters are optional, see our API guide for more details
      dimension : '1366xfull', // or "1366xfull" for full length screenshot
      device : 'desktop',
      format: 'png',
      cacheLimit: '0',
      delay: '200',
      zoom: '100'
    }

var apiUrl = screenshotmachine.generateApiUrl(customerKey, secretPhrase, options);

//save screenshot as an image
var fs = require('fs');
var output = 'output.png';
screenshotmachine.readScreenshot(apiUrl).pipe(fs.createWriteStream(output).on('close', function() {
  console.log('Screenshot saved as ' + output);
}));
```

Captured screenshot will be saved as ```output.png``` file in current directory.

# License

The MIT License (MIT)    