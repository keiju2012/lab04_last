const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, resp)=>{
    resp.end("Hello, welcome to my Heroku!");
})

app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("port is running");
})