const http =require('http');
const fs = require('fs');
var arr = [];
var port = 4000;

const server = http.createServer((req,res) => {
  var myReadStream = fs.createReadStream('text.txt');
  var data = "";
  myReadStream.on('data', (chunk) => {
      data += chunk;
  });
  myReadStream.on('end', () => {
     arr.push(data);
      console.log(data);
      console.log(arr.length);
      arr.forEach(function(elem) {
          console.log('elem :' + elem);
          elem = arr.filter(arr => arr.length => 2);
      })
      res.end(arr.toString());
  });
});
server.listen(port);
console.log('Server is Alive! ' + port);

