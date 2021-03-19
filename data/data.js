"use strict";

const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("students.db", function(err){
    if(err){
        return console.log(err.message);
    }
    console.log("Connected to database.");
});