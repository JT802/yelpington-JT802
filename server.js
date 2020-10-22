// imports of the important bits
const express = require("express");
const path = require("path");
const app = express();

// ------ Global Variables ------ //
// provideing port options
const port = process.env.PORT || 8000;
const public = path.resolve(".");

// here's some middleware for our home audience
//app.use(express.static('public')); (don't know if this conflicts yet)

// A single route for the homepage
app.get("/", (request, response) => {
  response.sendFile("./index.html")
});

// route for showing list of all restaurant ids in JSON format
app.get("/api", (request, response) => {
    response.sendFile('./api/restaurants.json')
});

// route for showing a single restaurant by id in JSON format
app.get("/api/restaurant-id", (request, response) => {
    response.sendFile('')
})

// Where the port is listening
app.listen(port, () => {
  console.log("App is listening on port: " + port)
});
