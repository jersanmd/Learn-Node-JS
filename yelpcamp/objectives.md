# YelpCamp

* Add Landing Page
* Add Campgrouds Page that lists all campgrounds

# Each Campground has

* Name
* Image

# Layout and Basic Styling

* Create header and footer partials
* Add in Bootstrap

# Creating New Campgrouds

* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

# Style the campgrounds page

* Add a better header/title
* Make a campgrounds display in a grid

# Style the Navbar and Form

* Add a navbar to all templates
* Style the new campground form

# Add Mongoose

* Install and Configure mongoose
* Setup campground model
* Use campground model inside of our routes

# Show Page

* Review the RESTful routes we've seen so far
* Add Description to our campground model
* Show db.collection.drop()
* Add a show route/temptlate

# RESTful routes
name        url             verb        description
=================================================================
INDEX       /dogs           GET         Display a list of all dogs
POST        /dogs/new       GET         Display a form to make a new dog
CREATE      /dogs           POST        Add new dog to DB
SHOW        /dogs/:id       GET         Shows info about one dog


# Refractor Mongoose Code

* Create a models directory
* Use module.exports
* Require everything correctly.

# Add Seeds File

* Add a seeds.js file
* Run the seeds every time the server starts

# Add the Comment model

* Make errors go away
* Display comments on campground show page

# Comment New/Create

* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

# Style Show Page

* Add sidebar to show page
* Display comments nicely

# Finish Styling Show Page

* Add public directory
* Add custom stylesheet

# Auth Pt. 1 - Add User Model

* Install all packages needed for auth
* Define User Model 

# Auth Pt. 2 - Register

* Configure Passport
* Add register routes
* Add register templates

# Auth Pt. 3 - Login

* Add Login Routes
* Add Login Template

# Auth Pt. 4 - Logout/Navbar

* Add logout Route
* Prevent user from adding a comment if not signed in
* Add links to navbar

# Auth Pt. 5 - Show/Hide Links

* Show / Hide auth links correctly

# Refractor the Routes

* Use Express router to recognize all routes

# Users + Comments

* Associate users and comments
* Save author's name to a comment automatically

# Users + Campgrounds

* Prevent an unauthenticated user from creating a campground
* Save username + id to newly created campground.