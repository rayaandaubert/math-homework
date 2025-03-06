const { createServer } = require("http");
const port = 8080;
createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
}).listen(port);
console.log(`Server running at http://localhost:${port}/`);
