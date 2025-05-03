const score=50000000;
console.log(score); // ->5000

const balance=new Number(100.7895); //new Number() created a obeject in the variable balance
console.log(balance); // ->[Number: 100]

console.log(score.toFixed(2)); // ->50000000.00
        //.toFixed('n') gives n digits after decimal

console.log(balance.toPrecision(5));// ->100.79
        //.toPrecision(n) gives n number precise and rest is id roundoff
        
console.log(score);// ->50000000
console.log(score.toLocaleString()); // ->50,000,000
console.log(score.toLocaleString('en-IN')); // ->5,00,00,000

console.log(Number.MIN_SAFE_INTEGER); // ->-9007199254740991 
console.log(Number.MAX_SAFE_INTEGER); // ->9007199254740991 
        //number beyound this safe range are stored in bigInt

        
// Math exist in the JavaScript object in Javascript by default consisting of many functions in it
console.log(Math); // dipalays functions available in math

console.log(Math.abs(-10)); // ->10  (Makes the given number positive)
console.log(Math.round(5.5)); // ->6 (Roudoff the given number)
console.log(Math.floor(4.6)); // ->4 (Roundoff the number to lower limit)
console.log(Math.ceil(4.2)); // ->5 (Roundoff the number to upper limit)

console.log(Math.max(2,6,3,8,68)); // ->68 (gives the largest number from the given array)
console.log(Math.min(3,35,68,34,23)); // ->3 (gives the smallest numbeer from the give array)

//*****************************************************************************************************************

// generating random number in a given range

const min = 10;
const max= 45;

const a = Math.random(); // Generates a random decimal number between 0 (inclusive) and 1 (exclusive)
console.log(a)

console.log(max - min); 
// Calculates the difference between max and min, which gives the total range of possible values.

console.log(a * (max - min + 1)); 
// Multiplies the random number 'a' by the range (max - min + 1).
// This scales 'a' to cover the entire range from 0 to (max - min + 1).
// The +1 ensures the upper limit (max) is included when flooring the final value.

console.log(a * (max - min + 1) + min); 
// Adds 'min' to shift the range from [0, max-min+1] to [min, max+1].
// This ensures the final number is always within the range [min, max].
