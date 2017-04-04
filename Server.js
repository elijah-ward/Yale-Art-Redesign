var express = require("express");
var morgan = require("morgan");
var app = express();
var favicon = require('serve-favicon');
var router = express.Router();
var path = __dirname + '/views/';
var template_path = __dirname + '/templates/'

app.set('port', (process.env.PORT || 5000));

/********************
*		ROUTES		*
*********************/

/* -------------------- HOME -------------------- */

router.get("/",function(req,res){
	res.sendFile(path + "index.html");
});

router.get("/HomePage",function(req,res){
	res.sendFile(path + "index.html");
});

router.get("/ArtShowcase", function(req,res){
	res.sendFile(path + "ArtShowcase.html")
});

router.get("/ArtsHomePage", function(req,res){
	res.sendFile(path + "ArtsHomePage.html")
});

router.get("/courses", function(req,res){
  res.sendFile(path + "courses.html")
});

router.get("/Resources", function(req,res){
  res.sendFile(path + "Resources.html")
});

/* ---- */

router.get("/studentprofiles", function(req,res) {
  res.sendFile(path + "studentprofiles.html")
});

/* -------------------- PROGRAMS --------------------- */

router.get("/ProgramsHomePage", function(req,res){
	res.sendFile(path + "ProgramsHomePage.html")
});

router.get("/ProgramsSculpture", function(req,res){
	res.sendFile(path + "ProgramsSculpture.html")
});

router.get("/ProgramsPainting", function(req,res){
	res.sendFile(path + "ProgramsPainting.html")
});

router.get("/ProgramsPhotography", function(req,res){
	res.sendFile(path + "ProgramsPhotography.html")
});

router.get("/ProgramsFilmAndMovieMaking", function(req,res){
	res.sendFile(path + "ProgramsFilmAndMovieMaking.html")
});

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

/* ----------------------- MISC ----------------------- */

router.get("/Test", function(req,res){
	res.sendFile(path + "test.html") /* Test -erase- */
});

app.use("/",router);
app.use(morgan('tiny'));


app.use(express.static('static'));
app.use("/static", express.static('static'));

app.use(favicon(__dirname+ "/src/Yale_School_of_Art.ico"));

app.use("/static", express.static('/node_modules/sequencejs'));

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(app.get('port'),function(){
  console.log("Site served at Port "+app.get('port'));
});
