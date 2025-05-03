// new is the constructor. It creates an instance, that is a empty object ("{}")

const createUser=function(userName,userAge,isLogedIn){
    this.userName=userName //this.userName is the variable which stores the value and username is the parameter
    this.userAge=userAge
    this.isLogedIn=isLogedIn

    return this
}

const user1=createUser("Name",69,true)
const user2=createUser("anotherName",88,false)
console.log(user1) // here the values in user2 will over-write the value of user1
    //therefore new keyword is used to create a new instance

const user3= new createUser("someonesName",66,false)
console.log(user3)

console.log(user3 instanceof createUser)//->ture
 //instanceof  us ed to test whether an object is an instance of a specific class or implements a particular interface