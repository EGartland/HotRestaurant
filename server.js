// Dependencies for our restaurant app
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3500;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup variables here
//===============================================================
var tables = [
   {
     name: "",
     email: "",
     phoneNumber: "",
     uniqueId: ""
   },
];

var currentreservations = [];
var waitinglist = [];
//===============================================================

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
   res.sendFile(path.join(__dirname, "home.html"));
 });
 
 app.get("/tables", function(req, res) {
    console.log(currentreservations);
   res.sendFile(path.join(__dirname, "tables.html"));
 });

 app.get("/currentreservations", function(req, res) {
     console.log(currentreservations);
   res.json(currentreservations);
 });

 app.get("/reservations", function(req, res) {
   res.sendFile(path.join(__dirname, "reservations.html"));
 });
 
 // Create New Characters - takes in JSON input
app.post("/reservations", function(req, res) {
   // req.body hosts is equal to the JSON post sent from the user
   // This works because of our body-parser middleware
   var newreservation = req.body;
 
   console.log(newreservation);

   if(currentreservations.length < 5) 
   currentreservations.push(newreservation);
   else
   waitinglist.push(newreservation);
 
 });
 // Starts the server to begin listening

 // =============================================================
app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
 });