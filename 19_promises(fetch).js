const promise1=new Promise(function(resolve,rejected){
    //a async tast is written here
    console.log("Async Task 1 Complited")
    resolve()// without calling resolve then will not be execuited
})
promise1.then(function(){
    console.log("1 Promise consumed")
})



new Promise(function(resolve,reject){
    console.log("Async Task 2 Complited")
    resolve() 
}).then(function(){
    console.log("2nd promise consumed")
})


const promise3= new Promise(function(resolve,reject){
  console.log("Async Task 3 , passing array through resolve")
  resolve({username:"SomeOne", email:"SomeOne@email.com"})  
})
promise3.then(function(useInfo){
    console.log(`3rd promise -user info in then ${JSON.stringify(useInfo)} \n`)
})


const promise4=new Promise(function(resolve,reject){
    let error= true
    if(!error){
        resolve({username:"Name",password:"1234"})
    }else{
        reject('Prom4 Error Occured')
    }
})
promise4.then(function(user){
    console.log(user)
    return user.username
}).then(function(username){// this is then-chaining, return from previous then is its input
    console.log(username)
}).catch(function(er){ // catch is executed when a error occures
    console.log(er)
}).finally(function(){
    console.log("Prom4 this is finally, promise is either resolve or rejected")
})


const promise5=new Promise(function(resolve,reject){
    let error= true
    if(!error){
        resolve({username:"Javascript language",password:"12345678910"})
    }else{
        reject('JavaScript language Error Occured')
    }  
})
async function consumerPromise5(){
    try{
        const response=await promise5
        console.log(response)
    }catch(error){ // if a promise is not resolved, without catch the code will give error
        console.log(error)
    }
}
consumerPromise5()  


async function octoInfo(){
    try{
    const requestUrl=await fetch('https://api.github.com/users/octocat')// fetch is function making API request and it returns a promise that resolves to a response object, when the request completes
    const data= await requestUrl.json() // await is addded here because converting from string to json will take time
    console.log(data)
    }catch{
        console.log("Error")
    }
}
octoInfo()


fetch('https://api.github.com/users/octocat')
.then(function(info){
    return info.json()
}).then(function(data){
    console.log(data);
})
.catch(function(er){
    console.log("error")
})
// when a browser returns a error message like 404, it is handeled by resolve
// reject handels only when the promise is unable to perform its task i.e it is not able to request 