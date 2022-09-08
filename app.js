//server.js or app.js (backend)

//*Node.js core modules: http(requests), https(encrypted SSL server), fs, path(file systems), os(operating systems)

const { writeFile } = require("fs");
const http = require("http");

//fs= file systems

const fs = require("fs");

//you can use an expression function
// function rqListener(req, res) {};
// http.createServer(rqListener);

//or you can use an annonymous function
// http.createServer(function (req, res) {});

//or you can use an arrow function
const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.headers);
  //   process.exit(); //hard exit: quits the process

  //parse through
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></input></form></body>"
    );
    res.write("</html>");
    return res.end(); //return here so that it doesnt continue execution.
  }

  if (url === "/message" && method === "POST") {
    //redirect user and add message

    fs.writeFileSync("message.txt", "DUMMY");

    // 302: redirect code
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");

  res.write("<html>");
  res.write("<head><title>My First Page</title><head>");
  res.write("<body><h1>Hello from my Node.js server</h1></body>");
  res.write("</html>");
  res.end(); //can't write after this or else errors
});

//arguments: port # and host name
server.listen(3001);

//*what we just did:
//executed node app.js => started script => parse code/register variables & functions => (node app)event loop =>(continous listening) => process.exit (stops listening)
