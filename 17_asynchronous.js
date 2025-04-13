/*
 JavaScript is by default synchronous i.e code runs line by line, one after another

 Asynchronous- Asynchronous code allows the program to continue running without waiting for long tasks to finish.
    Common use cases: API calls, timers, file reading, etc.
    JavaScript handles this with: Callbacks, Promises, Async/Await
*/

console.log(1)
setTimeout(function(){
    console.log(2)
},0)
console.log(3)

/**output order
 * 1
 * 3
 * 2
setTimeout function executes a function after the time-specified 
 here, its time is 0 milisecond, till task-queue add 2 to call-stack for execution 1&3 are executed
 */