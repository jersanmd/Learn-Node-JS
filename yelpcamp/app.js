var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    seedDB      = require("./seeds");

seedDB();

mongoose.connect("mongodb://localhost/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res) {
    res.redirect("/campgrounds");
});

app.get("/campgrounds", function(req, res) {
    // get all campgrounds from DB
    Campground.find({}, function(err, campgrounds) {
        if(err) {
            console.log(`Error: ${err}`);
        }else {
            res.render("campgrounds/index", {campgrounds: campgrounds});
        }
    })
});

app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = { name: name, image: image, description: description };
    
    Campground.create(newCampground, function(err, campground) {
        if(err) {
            console.log(`Error: ${err}`);
        } else {
            res.redirect("/campgrounds");
        }
    });    
})

app.get("/campgrounds/new", function(req, res) {
    res.render("campgrounds/new.ejs");
});

app.get("/campgrounds/:_id", function(req, res) { 
    Campground.findById(req.params._id).populate("comments").exec( function(err, foundCampground) {
        console.log(foundCampground);
        if(err) {
            console.log(`Error: ${err}`)
        }else {
            console.log(foundCampground);
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});


app.get("/campgrounds/:id/comments/new", function(req, res) {
    Campground.findById(req.params.id, function(err, campground) {{
        if(err) 
            console.log(err);

        else 
            res.render("comments/new", {campground: campground});
    }}) 
});

app.post("/campgrounds/:id/comments", function(req, res) {
    Campground.findById(req.params.id, function(err, campground) {
        if(err) {
            console.log(err);
            res.redirect("/campgrounds");
        }
        else {
            Comment.create(req.body.comment, function(err, comment){
                if(err) 
                    console.log(err);
                else { 
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect("/campgrounds/" + campground._id);
                }
            });
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, process.env.IP, function() {
    console.log(`YelpCamp server has started. ${PORT}`);
})