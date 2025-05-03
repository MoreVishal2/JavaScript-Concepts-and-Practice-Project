//Array is collectionof different datatypes
const ourArray=[1,654,743,true,"String"];

const secArray=['chips','chiken','Cold Drink'];


const conAr=ourArray.concat(secArray);//.concat() returns a array combining both array
console.log(conAr); // ->[ 1, 654, 743, true, 'String', 'chips', 'chiken', 'Cold Drink' ]

const bothAr=[...ourArray, ...secArray]; // spread is used to combine two our more array
console.log(bothAr); // ->[ 1, 654, 743, true, 'String', 'chips', 'chiken', 'Cold Drink' ]

const anotherArr=[1,2,45,56,[40,62,23,[67,82]],3,5,[93,71,92]];
const newAnotherArr=anotherArr.flat(Infinity);// .flat(n) is used to spread the arrray to a perticular depth
console.log(newAnotherArr);// ->[ 1,  2, 45, 56, 40, 62, 23, 67, 82,  3,  5, 93, 71, 92 ]

//converting into array
console.log(Array.from("ABCDEFGHIJKLM")); // ->[ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M' ]
    //Converts iterable or array-like objects into an array.
const a=300,b=400,c=600;
console.log(Array.of(a,b,c)); // ->[ 300, 400, 600 ]
    //Array.of() always creates an array with the provided arguments.


ourArray.push(6,9); // inserts the elemnts at the end of the array
console.log(ourArray); // ->[ 1, 654, 743, true, 'String', 6, 9 ]
ourArray.pop(); // removes the element from the end of the array
console.log(ourArray); // ->[ 1, 654, 743, true, 'String', 6 ]


ourArray.unshift(123);// inserts the element at the beginning of an array
console.log(ourArray); // ->[ 123, 1, 654, 743, true, 'String', 6 ]
ourArray.shift();// removes element from the beginning of the array
console.log(ourArray); // ->[ 1, 654, 743, true, 'String', 6 ]


console.log(ourArray.includes(1)); // ->true
console.log(ourArray.indexOf('String')); // ->4

const newAr= ourArray.join(); // converting the array into string
console.log(`newAr- ${newAr} & typeof newAr is ${typeof newAr} `); // ->newAr- 1,654,743,true,String,6 & typeof newAr is string



console.log('***************************');
//slice, splice

console.log(ourArray); // ->[ 1, 654, 743, true, 'String', 6 ]

const m1=ourArray.slice(1,3); //slice function copies a part of the array, end index is not included
console.log(m1); // ->[ 654, 743 ]
console.log(ourArray); // ->[ 1, 654, 743, true, 'String', 6 ]

const m2=ourArray.splice(1,3); //splice removes a part from the array, end index is inluded
console.log(m2); // ->[ 654, 743, true ]  
console.log(ourArray); // ->[ 1, 'String', 6 ]

/* Deep Copy And Shallow Copy
A Shallow copy creates a new object, but nested objects (or arrays) are still referenced,
 meaning changes to the nested structures affect both the original and copied objects.
A Deep copy creates a completely independent copy, including all nested objects.
 Modifying the copy does not affect the origina 
 */