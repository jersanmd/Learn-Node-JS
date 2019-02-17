var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "What a beautiful tent"
    },
    {
        name: "Night Camp Fire",
        image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "What a beautiful fire"
    },
    {
        name: "Camp with Friends",
        image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "What a beautiful bondings"
    }
]

function seedDB() {
    // Remove all campgrounds
    Campground.deleteMany({}, function(err) {
        if(err)
            console.log(err);
        
        else {
            data.forEach(function(seed) {
                Campground.create(seed, function(err, campground) {
                    if(err) 
                        console.log(err);
        
                    else {
                        Comment.create({
                            text: "This place is great",
                            author: "Homer" 
                        }, function(err, comment) {
                            if(err)
                                console.log(err);
                            
                            else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            } 
                        }) 
                    }
                })
            });
        }
    })
    
}

module.exports = seedDB;