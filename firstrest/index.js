const express = require('express')
//Start App
const app = express();
//Import routes
let apiRoutes = require("./routes")
//Use API routes in the App
app.use('/api', apiRoutes)
//import body parser
//const bodyparser = require('body-parser');
//import mongoose
let mongoose = require('mongoose');
//configure bodyparser to hande the post requests
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/firstrest', { useNewUrlParser: true,
useUnifiedTopology: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")
//Assign port
var port = process.env.PORT || 8080;
// Welcome message
app.get('/', (req, res) => res.send(req.body));
// Launch app to the specified port
app.listen(port, function() {
    console.log("Running FirstRest on Port "+ port);    
})