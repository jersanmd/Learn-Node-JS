var express = require("express"),
    Campground = require("../models/campground");

var router = express.Router();

router.get("/", function(req, res) {
    Campground.find({}, function(err, campgrounds) {
        if(err) {
            console.log(`Error: ${err}`);
        }else {
            res.render("campgrounds/index", {campgrounds: campgrounds});
        }
    })
});

router.post("/", isLoggedIn,function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = { name: name, image: image, description: description, author: author};

    Campground.create(newCampground, function(err, campground) {
        if(err) {
            console.log(`Error: ${err}`);
        } else {
            res.redirect("/campgrounds");
            console.log(campground);
        }
    });    
})

router.get("/new", isLoggedIn,function(req, res) {
    res.render("campgrounds/new.ejs");
});

router.get("/:_id", function(req, res) { 
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

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated())  {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;
