var express =require("express");
var app =express();


app.use(express.static("public"));


app.get("/", function(req,res){
   res.render("home.ejs");
});

app.get("/wallpapers/:image", function(req, res){
    var images = req.params.image;
    res.render("pics.ejs", {thingVar: images});
});

app.get("/posts", function(req, res){
   var posts = [
       {title: "Post 1", author: "kevin"},
       {title: "Post 2", author: "mavin"},
       {title: "Post 3", author: "calvin"},
       
       ];
    res.render("posts.ejs", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening from EJS demo");
}
);