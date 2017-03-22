var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var template_path = __dirname + '/templates/'

/********************
*		ROUTES		*
*********************/

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
	res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
	res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
	res.sendFile(path + "contact.html");
});

router.get("/showcase", function(req,res){
	res.sendFile(path + "showcase.html")
});

router.get("/ArtsHomePage", function(req,res){
	res.sendFile(path + "ArtsHomePage.html")
});

router.get("/courses", function(req,res){
  res.sendFile(path + "courses.html")
});

app.use("/",router);


app.use(express.static('static'));
app.use("/static", express.static('static'));

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Site served at Port 3000");
});
