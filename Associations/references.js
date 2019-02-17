var mongoose = require("mongoose"),
    Post = require("./models/post"),
    User = require("./models/user");
mongoose.connect("mongodb://localhost/blog_demo", {useNewUrlParser: true});



User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user) {
    if(err)
        console.log(err);

    else {
        console.log(user);
    }
});


// Post.create({
//     title: "How to slice the best beef? Part 2",
//     content: "Learn how to kill. Part 2"
// }, function(err, post) {
//     if(err)
//         console.log(err);

//     else {
//         User.findOne({email: "bob@gmail.com"}, function(err, foundUser) {
//             if(err)
//                 console.log(err);
            
//             else {
//                 foundUser.posts.push(post);
//                 foundUser.save(function(err, data) {
//                     if(err)
//                         console.log(err)

//                     else 
//                         console.log(data);
//                 })
//             }
//         });
//     }
// });