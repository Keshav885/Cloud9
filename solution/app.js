var express = require("express");
var app =express();

app.get("/", function(req, res){
    res.send("Welcome to Solution");
});

app.get("/speak/:animal", function(req, res){
    var sounds ={
        pig: "oink",
        dog: "Woof Woof",
        cow: "moo",
        cat: "meow"
    };
    
    var animal = req.params.animal.toUpperCase;
    var sound= sounds[animal];
    res.send("The " + animal + " says " +sound );
});

app.get("/repeat/:message/:times", function(req, res){
   var message = req.params.message;
   var num = Number(req.params.times);
   
   var result ="";
   for(var i=0; i<num; i++)
   {
      result += message + " " ;
   };
    res.send(result);
    
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});