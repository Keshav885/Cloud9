var express =require("express");
var app =express();

app.get("/", function(req, res){
   res.render("views/home.ejs"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Sever from PostDemo");
});