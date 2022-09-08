//fs= file systems
const fs = require("fs");

const { writeFile } = require("fs");

const requestHandler = (req, res) => {
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
    const body = [];

    //listens for data
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    //need a place to interact with data
    return req.on("end", () => {
      //listener
      const parsedBody = Buffer.concat(body).toString();
      //toString bc input type was text

      //console.log(parsedBody);
      const message = parsedBody.split("=")[1];

      //redirect user
      fs.writeFile("message.txt", message, (err) => {
        //sync = synchronous, use writeFile instead (takes 3 arguments as above)

        // 302: redirect code
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title><head>");
  res.write("<body><h1>Hello from my Node.js server</h1></body>");
  res.write("</html>");
  res.end(); //can't write after this or else errors
};

module.exports = requestHandler;

// or you can export this war:
// module.exports ={
//     handler: requestHandler,
//     someText: 'some hard coded text'
// }


// module.exports.handler = requestHandler:
// module.exports.someText = 'some hard coded text'

//you can also just ommit module and use exports.handler...etc