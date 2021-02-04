

var http = require('http');

// When you have your own Client ID and secret, put down their values here:
var clientId = "FREE_TRIAL_ACCOUNT";
var clientSecret = "PUBLIC_SECRET";

// TODO: Specify your translation requirements here:
var fromLang = "en";//src lang
var toLang = "de";//target lang u can find the lang code on google for other lang
var text = "Let's have some fun!";

var jsonPayload = JSON.stringify({
    fromLang: fromLang,
    toLang: toLang,
    text: text
});

var options = {
    hostname: "api.whatsmate.net",
    port: 80,
    path: "/v1/translation/translate",  //translate api used
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "X-WM-CLIENT-ID": clientId,
        "X-WM-CLIENT-SECRET": clientSecret,
        "Content-Length": Buffer.byteLength(jsonPayload)
    }
};

var request = new http.ClientRequest(options);
request.end(jsonPayload);

request.on('response', function (response) {
    console.log('Status code: ' + response.statusCode);
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
        console.log('Translated text:');
        console.log(chunk);
    });
});
