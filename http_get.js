// https://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request/
// http://sockettest.sourceforge.net/

var http = require('http');

var options = {
  host: '127.0.0.1',
  port: 8080,
  path: '/log?a=2'
};

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

http.request(options, callback).end();
