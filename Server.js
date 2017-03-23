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

/* -------------------- PROGRAMS --------------------- */

router.get("/ProgramsHomePage", function(req,res){
	res.sendFile(path + "ProgramsHomePage.html")
});

// router.get("/SculptureProgram", function(req,res){
// 	res.sendFile(path + "SculptureProgram.html")
// });

// router.get("/PaintingProgram", function(req,res){
// 	res.sendFile(path + "PaintingProgram.html")
// });

// router.get("/PhotographyProgram", function(req,res){
// 	res.sendFile(path + "PhotographyProgram.html")
// });

// router.get("/FilmAndMovieMakingProgram", function(req,res){
// 	res.sendFile(path + "FilmAndMovieMakingProgram.html")
// });

router.get("/ProgramsGraphicDesign", function(req,res){
	res.sendFile(path + "ProgramsGraphicDesign.html")
});

router.get("/SummerPrograms", function(req,res){
	res.sendFile(path + "SummerPrograms.html")
});

/* -------------------- ADMISSION -------------------- */

router.get("/AdmissionHomePage", function(req,res){
	res.sendFile(path + "AdmissionHomePage.html")
});

router.get("/AdmissionGeneralRequirements", function(req,res){
	res.sendFile(path + "AdmissionGeneralRequirements.html")
});

router.get("/AdmissionSpecificRequirements", function(req,res){
	res.sendFile(path + "AdmissionSpecificRequirements.html")
});

router.get("/AdmissionFinancialAid", function(req,res){
	res.sendFile(path + "AdmissionFinancialAid.html")
});

router.get("/AdmissionApplication", function(req,res){
	res.sendFile(path + "AdmissionApplication.html")
});

/* --------------------------------------------------- */


router.get("/Test", function(req,res){
	res.sendFile(path + "test.html") /* Test -erase- */
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