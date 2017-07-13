// https://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request/
// http://sockettest.sourceforge.net/

var http = require('https');



callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}

var value =0;

function myfunc() {
    var options = {
        host: 'api.thingspeak.com',
        port: 443,
        path: "/update?api_key=YQFVMWXGIAHSG846&field1="+ value
    };
   value++;
   http.request(options, callback).end();
}

setInterval(myfunc, 15000);
myfunc();
