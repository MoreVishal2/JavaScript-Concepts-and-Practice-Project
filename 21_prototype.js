// Everything in JavaScript behaves like an object, including functions.
// This allows us to dynamically add properties and methods to functions and use prototype-based inheritance.

// Define a simple function that logs a number
function sampleFunction(num){
    console.log(num);
}
sampleFunction(3);  // Output: 3

// Add a custom property to the function (because functions are objects)
sampleFunction.addObj = "add this to it";
console.log(sampleFunction.addObj); // Output: add this to it

// Every function in JS has a 'prototype' object that is used for inheritance when the function is used as a constructor
console.log(sampleFunction.prototype); // Output: sampleFunction {}

// Constructor function to create user objects with a score
function createUsername(username, score){
    this.username = username;
    this.score = score;
}

// Adding methods to the prototype so that all instances share them
createUsername.prototype.increment = function(){
    this.score++;
};

createUsername.prototype.printme = function(){
    console.log(`score is ${this.score}`);
};

// Creating instances of createUsername
const u1 = new createUsername("User1", 85);
const u2 = new createUsername("User2", 90);

// Calling methods on the instance
u1.printme(u1.increment());  // Increments the score, then prints it





// An array and a function to demonstrate Object prototype extension
const a1 = ["Fire", "Thunder"];
function a2(par){
    return `Power unknown still strong because of ${par}`;
}

// Extending the base Object prototype with a custom method 'power'
Object.prototype.power = function(inp){
    console.log(`your power is ${inp}`);
};

// Using the a2 function
const ex1 = a2('money');
console.log(ex1);  // Output: Power unknown still strong because of money

// Using the newly added prototype method
power(ex1);  // 'power' is globally available due to prototype extension (not recommended in production)

// Iterating over array and calling the prototype method on each element
a1.forEach(element => {
    power(element);  // Output for each: your power is Fire / Thunder
});