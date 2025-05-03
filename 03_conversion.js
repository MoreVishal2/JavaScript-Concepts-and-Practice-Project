/* Type Conversion - change of value from one data type to another
    example->let a=Number(b); , here 'a' is new variable and 'b' is variable already existing

    let a=Number(b);    conveting 'b' to a number stored in variable 'a'
    let a=Boolean(b);   conveting 'b' to boolean value stored in variable 'a'
    let a=b.toString(); conveting 'b' to a string stored in variable 'a'
     */

//declare variables
let num="124";
let num1="abc";
let num2=true;
let num3=null;

//printing datatype of variables
console.log(`1) ${num} - ${typeof num}`);   // ->1) 124 - number
console.log(`2) ${num1} - ${typeof num1}`); // ->2) abc - string
console.log(`3) ${num2} - ${typeof num2}`); // ->3) true - boolean
console.log(`4) ${num3} - ${typeof num3}`); // ->4) null - object


console.log("**********after converion**********");

//converting varibles into number
let n=Number(num);      //number in string format
let n1=Number(num1);    // Actual sting 
let n2=Number(num2);
let n3=Number(num3);

//printing datatypes of the converted variables
console.log(`1) ${n} - ${typeof n}`); // ->1) 124 - number
console.log(`2) ${n1} - ${typeof n1}`); // ->2) NaN - number
    //*NOTE*-  the string is converted into NaN(Not a Number).NaN has datatype number
console.log(`3) ${n2} - ${typeof n2}`); // ->3) 1 - number
console.log(`4) ${n3} - ${typeof n3}`); // ->4) 0 - number


//coversion of data to Boolean
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean("Hello"));  // true
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined)); // false
console.log(Boolean([]));       // true (empty array)
console.log(Boolean({}));       // true (empty object)

    // 0, -0 , "" (empty string), null, undefined, NaN, false, BigInt(0) - are converted into false 
    //everything else is converted into true including {}(empty object), [](empty array) and function(){}