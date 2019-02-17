# RESTful Routing

# Introduction

* Define REST and explain WHY it matters
* List all 7 RESTful routes
* Show example of RESTful routing in practice

REST - a mapping between HTTP routes and CRUD

# RESTful routes
name        url             verb        description                                             mongoose
===============================================================================================================================
INDEX       /dogs           GET         Display a list of all dogs                              Dog.find()
POST        /dogs/new       GET         Display a form to make a new dog                        N / A
CREATE      /dogs           POST        Add new dog to DB                                       Dog.create()
SHOW        /dogs/:id       GET         Shows info about one specific dog                       Dog.findById()
EDIT        /dogs/:id/edit  GET         Show edit form for one dog                              Dog.findById()
UPDATE      /dogs/:id       PUT         Update a particular dog, then redirect somewhere        Dog.findByIdAndUpdate()
DESTROY     /dogs/:id       DELETE      Delete a particular dog, then redirect somewhere        Dog.findByIdAndRemove()


# Blog Index

* Setup the Blog App
* Create the Blog Model
* Add INDEX route and template
* Add Simple Nav Bar

# Basic Layout

* Add Header and Footer Partials
* Include Semantic UI
* Add Simple Nav

# Putting the C in CRUD

* Add New route
* Add new template
* Add Create route
* Add Create template

# SHOWtime

* Add Show Route
* Add Show Template
* Add links to show page
* Style show template

# Edit/Update

* Add Edit Route
* Add Edit Form
* Add Update Route
* Add Update Form
* Add Method-Override

# DESTROYYY

* Add Destroy Route
* Add Edit and Destroy Links

# Final Update

* Sanitize blog body
* Style Index
* Update REST Table