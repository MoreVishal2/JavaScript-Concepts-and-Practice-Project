/*Immediately Invoked Function Expression (IIFE)
    ()() - first parenthesis is for function defination and second for its immediate execuation, 
     it is also used to remove the global scope variable pollution
     as it creates a private scope, preventing variables from affecting the global 
   */

(function fun1(){
    console.log("IIFE Function"); // ->IIFE Function
})();

((name) =>{ // IIFE arrow function with no name
    console.log(`IIEF function variable ${name}`); //->IIEF function variable ABCDEF 
})("ABCDEF");