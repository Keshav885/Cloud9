var express = require("express");
var app =express();

app.get("/", function(req, res){
    res.send("Welcome to task");
});

app.get("/speak/:animal", function(req, res){
    res.send("You are in speak route");
});
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});