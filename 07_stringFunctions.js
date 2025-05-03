const name='  Vishal  '; // declaring a string

console.log(`The string in variable name is ${name}`);// variables can be written in a sting using backtick 
console.log(name.length);// Length of the string name

const name1=new String('ABCD--XYZ'); // 'new String()' created a object in variable name1. 'ABCD' is string but, name1 is a obeject
console.log(name1);
console.log(name1[0]);
console.log(Object.getPrototypeOf(name1));// this wil print all available string functions in name1
console.log(name1.charAt(2));// ->C
console.log(name1.indexOf('C')); //->2

console.log(name1.replace('--','..')); //->ABCD..XYZ
console.log(name1.includes('AB')); //->true
console.log(name1.split('--')); //-> [ 'ABCD', 'XYZ' ]

console.log(name); // ->  Vishal
console.log(name.trim());// ->Vishal



//sub-string
const str2=name1.substring(0,4);//created a sub-string of name, starting index is always from zero in .substring()
console.log(str2); // ->ABCD

const str3=name1.slice(-9,-5);//negative-indexing can be used in .slice()
console.log(str3);// ->ABCD