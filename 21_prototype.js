//everthing in javascript is an object or we can say it behaves like one
// showing its prototype-based inheritance

function sampleFunction(num){
    console.log(num)
}
sampleFunction(3)

sampleFunction.addObj="add this to it"
console.log(sampleFunction.addObj)
console.log(sampleFunction.prototype)



function createUsername(username,score){
    this.username=username
    this.score=score
}
createUsername.prototype.increment=function(){
    this.score++
}
createUsername.prototype.printme=function(){
    console.log(`score is ${this.score}`)
}

const u1=new createUsername("User1",85)
const u2=new createUsername("User2",90)
u1.printme(u1.increment())

const a1=["hgj","jsdh"]
const a2=function(par){
    console.log(`power is ${par}`)
}


