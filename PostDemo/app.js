var express =require("express");
var app =express();

app.use(express.static("public"));

app.get("/", function(req,res){
   res.render("home.ejs"); 
});

app.get("/friends", function(req, res){
   var friends =[bob, kim, joe, chris, ross];
   
   res.render("friendsPage.ejs");
   
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Sever from PostDemo");
});