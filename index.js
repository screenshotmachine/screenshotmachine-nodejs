var request = require('request'),
    crypto = require('crypto');
var screenshotBaseUrl = 'https://api.screenshotmachine.com/?';
var pdfBaseUrl = 'https://pdfapi.screenshotmachine.com/?';

module.exports.generateScreenshotApiUrl = function(customerKey, secretPhrase, options) {
    return generateUrl(screenshotBaseUrl, customerKey, secretPhrase, options);
}

module.exports.generatePdfApiUrl = function(customerKey, secretPhrase, options) {
    return generateUrl(pdfBaseUrl, customerKey, secretPhrase, options);
}

function generateUrl(baseUrl, customerKey, secretPhrase, options) {
    var apiUrl = baseUrl + 'key=' + customerKey;
    if (secretPhrase != null && secretPhrase.trim().length > 0) {
      apiUrl = apiUrl + '&hash=' + crypto.createHash('md5').update(options['url'] + secretPhrase).digest("hex");
    }
    for(var param in options) {
      apiUrl = apiUrl +  '&' + param  + '=' + encodeURIComponent(options[param]);
    }
    return apiUrl;
}

module.exports.readScreenshot = function(url) {
  return request(url);
}
