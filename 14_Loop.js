//for loop

for(let i=0;i<=10;i++){
    console.log(i);
}

    //continue and break
for(let j=0;j<20;j++){
    if(j<10 && j>5 ){
        console.log("Skip");
        continue; // When continue keyword occur the loop skips the current iteration and moves to the nextone
    }

    console.log(`Value of i is ${j}`);
    if(j==15){
        console.log('15 detected')
        break; // When break keyword occur, the loop ends there
    }

}


//while loop
let index=0
while(index<10){
    console.log(index);
    index=index+2;
}

//do-while loop
    // in do-while loop, loop is executed then condition is checked
let score=11;
do{
    console.log(`Score is ${score}`);
}while(score<10);