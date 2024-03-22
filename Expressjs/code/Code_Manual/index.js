//creating http server manually without expresssjs help

const http = require("http");
const PORT = 3003;
const server = http.createServer((req, res) => {
    // code related to handling request and sending responses back
    res.writeHead(200, {"ContentType": "text/plain"});

    if (req.url === "/") {
        res.end("its a base url / ");
    } else {
        res.writeHead(404, {"ContentType": "text/plain"});
        res.end("404 not found url provided \n");
    }
});

server.listen(PORT, ()=>{
    console.log(`Server runnign at localhost:${PORT}`);
})

// setTimeout(()=>{
//     server.close(()=>{
//         console.log("Server Closed");
//     })
// },100000)