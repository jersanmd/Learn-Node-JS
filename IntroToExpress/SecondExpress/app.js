var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:name", function(req, res) {
    var name = req.params.name;
    var says = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof"
    };
    res.send(`The ${name} says '${says[name]}'`);
});

app.get("/repeat/:message/:num", function(req, res) {
    var message = req.params.message;
    var num = req.params.num;
    var text = "";
    for(var x = 0; x < num; x++) {
        text += `${message} `;
    }
    res.send(text);
})

app.get("*", function(req, res) {
    res.send("Sorry, page not found... What are you doing with your life?");
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started"); 
});