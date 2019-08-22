var https = require("https"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    port = process.argv[2] || 8084;
    //读取key后缀的文件
var privatekey = fs.readFileSync("./server.key"); 
//读取crt文件
var cretificate = fs.readFileSync("./server.crt");
var credentials = {key:privatekey,cert:cretificate};
https.createServer(credentials,function(request, response) {

  var uri = url.parse(request.url).pathname
    , filename = path.join(process.cwd(), uri);

  fs.exists(filename, function(exists) {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
      return;
    }

    if (fs.statSync(filename).isDirectory()) filename += '/index.html';

    fs.readFile(filename, "binary", function(err, file) {
      if(err) {        
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
      }

      response.writeHead(200);
      response.write(file, "binary");
      response.end();
    });
  });
}).listen(parseInt(port, 10));
console.log("Static file server running at\n  => https://localhost:" + port + "/\nCTRL + C to shutdown");