// Function to set a user with name, email, and password
function createUser(name, email, pass) {
    // Using 'call' to invoke setUser in the context of the current object (this)
    // This allows reuse of the setUser function for assigning the name
    setUser.call(this, name);
    
    // Assign remaining properties directly
    this.email = email;
    this.pass = pass;
}

// Separate function that only sets the 'name' property
function setUser(name) {
    this.name = name;
}

// Creating a new user instance
const u1 = new createUser("SomeOne", "someone@gmail.com", "1234");

// Logging the user object to verify that all properties are correctly assigned
console.log(u1); 
// Output: createUser { name: 'SomeOne', email: 'someone@gmail.com', pass: '1234' }