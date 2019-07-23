var request = require('request'),
    crypto = require('crypto');

module.exports.generateApiUrl = function(customerKey, secretPhrase, options) {
    var apiUrl = 'https://api.screenshotmachine.com/?key=' + customerKey;
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
