var express =require("express");
var app =express();
var bodyParser =require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");
var friends =["bob", "kim", "joe", "chris", "ross"];

app.get("/", function(req,res){
   res.render("home.ejs"); 
});

app.get("/friends", function(req, res){
   res.render("friendsPage.ejs", {friends: friends});
   
});

app.post("/newfriend", function(req, res){
   var addnew = req.body.addnew;
   friends.push(addnew);
   res.redirect("/friends");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Sever from PostDemo");
});