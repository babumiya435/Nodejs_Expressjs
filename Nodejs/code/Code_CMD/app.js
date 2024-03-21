console.log("\"Node JS - Express Server example\"");
const express = require("express");
const methods = require("methods");
const debug = require('debug')('express:router:route');
// Log a debug message
// debug('Debug message here');
// console.log(express);
app = express();
const PORT = 3002;

app.get("/", (req,res) => {
    res.send("<div><h1>HI</h1><h2>HI</h2><h3>HI</h3></div>")
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})


