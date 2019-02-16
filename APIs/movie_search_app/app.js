var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
})

app.get("/results", function(req, res) {
    var search = req.query.search;
    request(`http://www.omdbapi.com/?s=${search}&apikey=thewdb`,
        function(error, response, body) {
            var data = JSON.parse(body);
            res.render("results", { data: data });
        }
    )
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is running..");
})
