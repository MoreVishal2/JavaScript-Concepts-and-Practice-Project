//const, let and var keyword are used to declare a varible 
//datatype is not needed to be specified , it is assigned automatically 

const accId=1334;
    //const keyword is used to declare a varible when the value of variable will not be changed 
    //and later if attempted to change the value error will occur(hoisted and cannot be used before declaration)
let accEmail="abcd@gmail.com";
    //let keyword is used to declare a varible , we can later change the value of variable 
    // it is hoisted but cannot be used before declaration


var accPass="1234";
    //var keyword was used to declare varible, changes in the value of the varible is allowed
    //the varible declared using var keyword are hoisted and can be used even before its declaration(if tried to print the vale before declaration, undefined will be printed)
    //var keyword is not recommended to use beacuse the varible is accessible even out of the block it is declared(it has no contol on the scope)
accCity="Jaipur";
    //without any keyword a varible  can be declared and used but it is not reccomended
    //the variables declared like this have a global scope(like var keyword) even if they are decalred inside a block


console.log(accCity);
    //console.log() -it is used to print the on the cosole

console.table([accId,accEmail,accPass,accCity]);
    //console.table() is used to print the varibles in a tabular format
    //┌─────────┬──────────────────┐
    //│ (index) │ Values           │
    //├─────────┼──────────────────┤
    //│ 0       │ 1334             │
    //│ 1       │ 'abcd@gmail.com' │    
    //│ 2       │ '1234'           │
    //│ 3       │ 'Jaipur'         │
    //└─────────┴──────────────────┘