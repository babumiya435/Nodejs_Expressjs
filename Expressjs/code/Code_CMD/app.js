const express = require("express");

const app = express();
const PORT = 3000;

app.get('/', (req,res)=>{
    res.send("requested root path data");
});

app.get('/items', (req,res)=>{
    res.send("requested items path data")
});

app.listen(PORT, ()=>{
    console.log(`app is running at localhost:${PORT}`);
});

