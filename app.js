//server.js or app.js (backend)

//*Node.js core modules: http(requests), https(encrypted SSL server), fs, path(file systems), os(operating systems)

const http = require("http");

//you can use an expression function
// function rqListener(req, res) {};
// http.createServer(rqListener);

//or you can use an annonymous function
// http.createServer(function (req, res) {});

//or you can use an arrow function
const server = http.createServer((req, res) => {
  console.log(req);
//   process.exit(); //hard exit: quits the process
});

//arguments: port # and host name
server.listen(3001);

//*what we just did:
//executed node app.js => started script => parse code/register variables & functions => (node app)event loop =>(continous listening) => process.exit (stops listening)
