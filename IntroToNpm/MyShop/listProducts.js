// NPM Faker Challenge

var faker = require("faker");

for (var i = 0; i < 10; i++) {
    var commerce = faker.commerce;
    console.log(`Name: ${commerce.productName()}, Price: ${commerce.price()}`);
}