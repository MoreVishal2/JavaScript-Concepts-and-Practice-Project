function fname(){
    //code to be exicuted
}

fname();//Calling a function 


function addNum(num1,num2){ // num1 and num2 are parameters
    console.log(num1+num2);
}

addNum(3,4); // 3 and 4 are arguments

const result=addNum(4,4) // ->8
console.log("Result -",result) // ->Result - undefined
        // the value printed on the console is 8 because printing on cosole is written in the function
        // but the function id is returning nothing thats why value of result is undefined

// if a value is returned and some code is written after it, that code is inaccessible 


function userMessage(username){
    return `${username} just loged in`;
}
console.log(userMessage("ABCD")) //->ABCD just loged in
console.log(userMessage()) // ->undefined just loged in
    // When no value is given in argument, it is undefined 





function cal(num1){
    return num1;
}
console.log(cal(200,300,400));// ->200
    // thought three arguments are given but only one parameter exists, so only first argument value is taken


function cal1(...num){ // "..." is rest operator here
    return num;
}
console.log(cal1(200,300,4000));// ->[ 200, 300, 4000 ]
    // using rest operator assigns arguments to the parameter in the form of array
function cal2(val1,val2,...num){
    return num;
}
console.log(cal2(200,300,400,500,600,700)) // ->[ 400, 500, 600, 700 ]
    // 200 and 300 are not in the array because that value is assigned to val1 and val2




//Object, array and function

const user={
    username:"ABCDEFGHI",
    salary:10000000
}
function handleObject(obj){
    console.log(`username is ${obj.username} and the salary is ${obj.salary}`);
}
handleObject(user); // ->username is ABCDEFGHI and the salary is 10000000

const newArray=[200,300,400,500];
function returnArray(getArray){
    return getArray[1];
}
console.log(returnArray(newArray)); // ->300


/* A normal function can be accessed even before its declaration,
    this is because JavaScript moves the whole function to the top of its scope 
    but if a function has a Function Expression(assigned to a variable), that function can not be called before its declaration
 */