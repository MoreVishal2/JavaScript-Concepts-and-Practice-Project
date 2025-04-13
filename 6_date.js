/* In JavaScript, dates are calculated in milliseconds from January 1, 1970, at midnight UTC (00:00:00 UTC)
    positive value represent dates after 1970
    negative value represent dates befor 1970*/

let date = new Date(); // Creates a new Date object representing the current date and time.
console.log(typeof date); // -> "object" (The Date object in JavaScript is of type 'object')


// Different ways to format the date:

console.log(date); // eg->2025-03-10T06:45:24.544Z
// Outputs the full date-time in ISO format
// The 'Z' indicates UTC (Coordinated Universal Time).

console.log(date.toString()); // eg-> Mon Feb 10 2025 12:15:24 GMT+0530 
// -> Outputs a human-readable string format (India Standard Time)

console.log(date.toDateString()); // eg->Mon Feb 10 2025
// -> Outputs only the date part in a readable format

console.log(date.toLocaleDateString()); // eg->10/2/2025
// -> Outputs the date in a localized format based on system settings 

console.log(date.toLocaleString()); // eg->10/2/2025, 12:15:24 PM
// Outputs both date and time in a localized format 


console.log('*****************************');

//Different Syntax used for Creating date objects 

let myDate=new Date(2025,0,5); // specifing only year,month and date (Month Counting starts from 0)
console.log(myDate.toLocaleString()); // ->5/1/2025, 12:00:00 am 
let myDate1=new Date(2025,0,8,3,8); // specifying  date,month,year and time
console.log(myDate1.toLocaleString()); // ->8/1/2025, 3:08:00 am  
let myDate2=new Date('1-1-1970'); // Date format DD-MM-YYYY (here the are written in inverted commas and counting starts from 1)
console.log(myDate2.toLocaleString()); // ->1/1/1970, 12:00:00 am 
let myDate3=new Date('1960-01-14'); //Date format YYYY-MM-DD
console.log(myDate3.toLocaleString()); // ->14/1/1960, 5:30:00 am  


//TimeStamp -  number of milliseconds that have passed since the Unix epoch(midnight at the beginning of January 1, 1970)

//Creating timestamp of current time
let myTimeStamp=Date.now();
console.log(myTimeStamp);// ->1739181431845

//printing the timestamp of Dates created
console.log(myDate.getTime());// ->1736015400000
console.log(myDate1.getTime());// ->1736285880000
console.log(myDate2.getTime());// ->-19800000
console.log(myDate3.getTime());// ->-314496000000

//Date is an object and timestamp is a number