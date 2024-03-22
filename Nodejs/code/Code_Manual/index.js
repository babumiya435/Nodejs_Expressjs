// loadhttp module
const http = require("http");

//create server
const PORT = 3002;
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });

    if (req.url === "/") {
        res.end("Welcome to the base url");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 not found url \n")
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`)
});

setTimeout(() => {
    server.close(() => {
        console.log('Server closed');
    });
}, 5000);

