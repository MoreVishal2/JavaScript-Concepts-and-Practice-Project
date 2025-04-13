const usr={
    user:"XYZ",
    salary:850000,
    userMessage: function(){
        console.log(`${this.user} , we welcome you here`); // this is used to refer to the current context
        console.log(this); //->{ user: 'XYZ', salary: 850000, userMessage: [Function: userMessage] } 
    }
}

usr.userMessage(); // ->XYZ , we welcome you here

console.log(this); // ->{}
    //in node this return an empty object, when run in browser window object apperes

function exapl(){
    let username ='MNBV';
    console.log(this); // here this is written in a function, and it will return lot of things
    console.log(this.username); // ->undefined 
    //it would have been accessible if written inside a object
}
exapl()




// arrow function -> ()=>{}
// const functName = (parameters) => {code to be exicuted}
const ex1=() =>{
    let username="sonems";
    console.log(this); //->{}
    console.log(this.username); //->undefined
}
ex1()

//implicut return 
const addNum= (num1,num2) => (num1+num2) // here insted of curly braces paranthesis are use, it retuns what is written in paranthesis
const addNum1=(num1,num2) => { return num1+num2}
    // here both the arrow function do the same work only the difference is when to use the return keyword
    
console.log(addNum(3,4)); //->7
console.log(addNum1(3,5)); //->8
const ret = ()=>({username:"SomeThing"}) // returning a object 
