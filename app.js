const http = require("http");

const routes = require("./routes");

const server = http.createServer(routes);
server.listen(3001);


















////////////////////////////////////////////////////////////////////////*

//this file is just a server

//* console.log(routes.someText)
//*const server = http.createServer(routes.handler): if you used this in routes



//arguments: port or and host name

//   console.log(req.url, req.method, req.headers);
//   process.exit(); //hard exit: quits the process

//server.js or app.js (backend)
//*Node.js core modules: http(requests), https(encrypted SSL server), fs, path(file systems), os(operating systems)

//you can use an expression function
// function rqListener(req, res) {};
// http.createServer(rqListener);

//or you can use an annonymous function
// http.createServer(function (req, res) {});

//or you can use an arrow function

//*what we just did:
//executed node app.js => started script => parse code/register variables & functions => (node app)event loop =>(continous listening) => process.exit (stops listening)

//how do we get data from user input: use buffers(organizes requests in to chunks to work on)

// asynchronous : a function is passed an annonymous function
