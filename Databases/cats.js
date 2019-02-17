var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the database

//  var george = new Cat({
//      name: "Mrs. Norris",
//      age: 7,
//      temperament: "Evil"
//  });

//  george.save(function(err, cat) {
//      if (err) {
//          console.log(`Something went wrong: ${err}`)
//      }
//      else {
//          console.log(`${cat} has been saved.`)
//      }
//  });

// retrieve all cats from DB and console.log each one

//  Cat.find({}, function(err, cats) {
//      if (err) {
//          console.log(`Error: ${err}`);
//      }
//      else {
//          console.log(cats);
//      }
//  });

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function (err, cat) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(cat);
    }
})
