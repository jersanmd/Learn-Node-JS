var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there");
})

app.get("/bye", function(req, res) {
   res.send("Goodbye!"); 
});

app.get("/dog", function(req, res) {
    console.log("Someone made a request to the /dog");
    res.send("Meow");
});

// With parameters
app.get("/r/:subRedditName", function(req, res) {
    var subreddit = req.params.subRedditName;
    res.send(`Welcome to the ${subreddit.toUpperCase()} Subreddit.`);
})

app.get("*", function(req, res) {
    res.send("Star");
})


app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Server has started");
});