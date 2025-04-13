/* if statement - if(conditation){code to be exicuted}
 * 
 */

if(false){ // only if the condition gives true the code will execute, since it is false the code wiol not be executed 
    iajoiaofilavjad // this code is unreachable and will not give error
}else{
    console.log("Else is executed");// ->Else is executed
}

a=25
if(a>20){
    console.log("a>20");
}else if(a==20){
    console.log("a=20");
}else{
    console.log("a<20")
}

const userEmail="";
if (userEmail){
    console.log("Got user email");
}else{
    console.log("Dont have email");
}

/**Switch case syntax
 * switch(key){
    case value:
        break;
    default:
        break;
} */

const month=3;
switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    default:
        console.log("error");
}


// Nullish Coalescing Operator (??) used for null or undefined values
let val;
val = 5 ?? 10 // generally value1 is assigned but if it is null/undefined value2 is assigned 
console.log(val) //->5

// Terniary operator - condition ? if true statement : if false statement
val<=7 ? console.log("less than equalto 7"):console.log("greater than 7")