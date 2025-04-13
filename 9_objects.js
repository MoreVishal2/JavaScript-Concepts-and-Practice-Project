// Singleton - only one instance of object is created and reused, created using constructor
    //object.create
const someUser=new Object(); // created a singleton 
        //they are created when a single instance is required across the application

//object Literals - simplest way to define object , used to create multiple independent object 
const thatUser={};//created a non singleton object(object literal)
const sym=Symbol("key1");
const user={
    name:"ABCDEFG",
    "full name":"ABCDEFG UVWXYZ",
    [sym]:"mykey",
    age:60,
    location:"City",
    email:"abcdefg@gmail.com"
}

console.log(user.email);
console.log(user["email"]); // bheind tthe scene the keys are treated as string
console.log(user["full name"]); // here the 'full name' key itself is treated as a string which can only be accessed through user[""]
console.log(user[sym]);

user.location="Country"; //overring the value 
//Object.freeze(user)  freezes the object, the changes made after this will not give error and will not propogate changes

user.sayHi=function(){
    console.log("hello user")
}
user.sayHi2=function(){
    console.log(`hello user ${this.name}`)
}

console.log(user.sayHi); // ->[Function (anonymous)] 
console.log(user.sayHi()); // ->hello user

console.log(user.sayHi2()); // ->hello user ABCDEFG 




const regularUser={
    email:"ABCDE@gmail.com",
    fullname:{
        firstname:"Hai",
        middleName:"koi",
        lastName:"To"
    }
}

console.log(regularUser.fullname); // ->{ firstname: 'Hai', middleName: 'koi', lastName: 'To' }
console.log(regularUser.fullname.firstname); // ->Hai

//Checking if the object has the property in it
console.log("Checking if Property Exists- ",regularUser.hasOwnProperty('email')); //->Checking if Property Exists-  true

const ob1={1:"a",2:"b"};
const ob2={3:"c",4:"d"};

const ob3={ob1,ob2};
console.log(ob3); //->{ ob1: { '1': 'a', '2': 'b' }, ob2: { '3': 'c', '4': 'd' } }

const ob4=Object.assign(ob1,ob2); // Object.assign(target,source1,source2) , adds all the key-value pair from source to the target object
console.log(ob4); //->{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(ob1===ob4); //->true
    //all the sources(ob2) were added the target(ob1)

const ob5=Object.assign({},ob1,ob2); // ob1 and ob2 is combined in target i.e {}
console.log(ob5); //->{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const ob6={...ob1,...ob2};
console.log(ob6);

//Accessing Keys and values from a object (when only keys or values are accessed they are in array)
console.log("regularUser - ",regularUser); //-> regularUser -  { email: 'ABCDE@gmail.com', fullname: { firstname: 'Hai', middleName: 'koi', lastName: 'To'} }
console.log("Keys In regular User - ",Object.keys(regularUser)); //->Keys In regular User -  [ 'email', 'fullname' ]
console.log("Values in Regular user - ",Object.values(regularUser)); //->Values in Regular user -  ['ABCDE@gmail.com',{ firstname: 'Hai', middleName: 'koi', lastName: 'To' }]

console.log("regularuser using Object.entries() -",Object.entries(regularUser)); //->regularuser using Object.entries() - [  [ 'email', 'ABCDE@gmail.com' ],['fullname',{ firstname: 'Hai', middleName: 'koi', lastName: 'To' }]  ]
    //enties() returns every key-value pair in seprate sub-array, where the first elements is key and the second element is the value



//objects in a array
const user1 =[
    {
        id:1,
        email:"asd@gmail.com"
    },
    {
        id:2,
        email:"fgh@gmail.com"
    },
    {
        id:3,
        email:"jkl@gmail.com"
    },
    {
        id:4,
        email:"qwe@gmail.com"
    }
]
// accessing property of a object in the array
console.log(user1[3].email);

const lastUser={
    id:123,
    somethingVeryLongToWrite:"value"
}
console.log(lastUser.somethingVeryLongToWrite); //->value

const {somethingVeryLongToWrite: short} = lastUser ;
    //Destructuring , allows to extract properties from a object and store them in a variable
console.log(short); //->value


const short1 = lastUser.somethingVeryLongToWrite; 
const newUser = { short1 }; // Creating a new object with a different structure
    //restructuring is modifying or rebulding an object with a different shape
console.log(short1); //->value
console.log(newUser) //->{ short1: 'value' }