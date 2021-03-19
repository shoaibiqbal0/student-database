"use strict";

const express = require("express");

var app = express();

app.use(express.static("static"));

app.get("/students", function(req, res){
    res.send("Hello world!");
});

app.listen(3000, function(err){
    if(err){
        return console.log(err.message);
    }
    console.log("Server started.");
})