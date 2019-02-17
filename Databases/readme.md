# Databases

# Intro to Databases

* What is a database?
    * A collection of information/data
    * Has an interface
    
* SQL (relational) vs NoSQL(non-relational)

# Intro to MongoDB

* What is MongoDB
* Why are we using it!
* Let's install it!

# Our First Mongo Commands

* mongod
* mongo
* help
* show dbs
* use
    * use demo && db insert
* insert
    * db.dogs.insert({name: "Lucy", breed: "Mutt"})
* find
    * db.dogs.find() / db.dogs.find({name: "Rusty"})
* update
    * db.dogs.update({name: "Rusty"}, {$set: {name: "Tater", isCute: true}})
* remove
    * db.dogs.remove({breed: "Labradoodle"})

# Mongoose

* What is Mongoose?
* Why are we using it?
* Interact with a Mongo Database using Mongoose