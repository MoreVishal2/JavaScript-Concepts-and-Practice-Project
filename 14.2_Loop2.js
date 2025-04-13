//for of loop-used to iterate over iterable object like string,array,etc
//  for(let variable of iterable){} , where variable stores the current element in each iteration, and iterable is any iterable object

const arr=[12,45,67,89,54,32];
for(const element of arr){
    console.log(element)
}

//Maps - is like object only difference is map does not have duplicate values
const map=new Map()
map.set('IN','INDIA');
map.set('Fr','France');
map.set('EN','England');

for(const [keys,value] of map){
    console.log(keys, ' : ',value);
}

const myob={
    'name':"ABCD",
    player:"BGMI"
}
// for(const keyV of myob){
//     console.log(keyV);
// } object is not iterable with for-of loop, so for-in loop is used

for(const key in myob){ // key stores the proprty name(key) of the object in each iteration
    console.log(`key ${key} - value ${myob[key]} `);
}

// forEach loop is used to exicute perticulae steps over each iteration
    // these steps are written inside a function and the name for the function is not given
const lang=["python","Java","HTML","CSS","JavaScript"];

lang.forEach(function (val) {
    console.log(val);
})

lang.forEach((val1,index,arr) =>{ //(item, index, arr) this all values are accessible through forEach
    console.log(val1, index, arr);
})

function print(item){
    console.log(item);
}
lang.forEach(print); // forEach loop can also give reference of the function when it is already defined

const arr1=[
    {
        location:"Africa",
        work:"Swimming",
        name:"backStroke"
    },{
        location:"Africa",
        work:"Swimming",
        name:"backStroke"
    },{
        location:"Africa",
        work:"Swimming",
        name:"backStroke"
    },
]

arr1.forEach((propert)=>{
    console.log(propert,' - ',propert.location);
})


//filter,  map
const numbs=[1,2,3,4,5,6,7,8,9,10]
const newnumbs=numbs.filter((num)=>num>4)// .filter() is used to create a new array containg only the elements that satisfy a given condition 
console.log(newnumbs)

let books = [
    {title: "The Great Gatsby",genre: "Classic",publisher: "Scribner",copiesSold: 25000000},
    {title: "To Kill a Mockingbird",genre: "Fiction",publisher: "J.B. Lippincott & Co.",copiesSold: 40000000},
    {title: "1984",genre: "Dystopian",publisher: "Secker & Warburg",copiesSold: 30000000},
    {title: "The Catcher in the Rye",genre: "Fiction",publisher: "Little, Brown and Company",copiesSold: 65000000},
    {title: "Harry Potter and the Sorcerer’s Stone",genre: "Fantasy",publisher: "Bloomsbury",copiesSold: 120000000},
    {title: "The Hobbit",genre: "Fantasy",publisher: "George Allen & Unwin",copiesSold: 100000000},
    {title: "The Da Vinci Code",genre: "Thriller",publisher: "Doubleday",copiesSold: 80000000},
    {title: "The Alchemist",genre: "Fiction",publisher: "HarperCollins",copiesSold: 65000000},
    {title: "The Lord of the Rings",genre: "Fantasy",publisher: "George Allen & Unwin",copiesSold: 150000000},
    {title: "Pride and Prejudice",genre: "Romance",publisher: "T. Egerton",copiesSold: 20000000}
];

console.log(books.filter((bk)=>bk.genre==="Fantasy"));
console.log("********************************")
console.log(books.filter((bk)=>(bk.copiesSold>10000000 && bk.genre=="Fantasy")))


const numEx=[1,2,3,4,5,6,7,8,9,10]
const newnumEx=numEx.map((num)=>{return num+10})
console.log(newnumEx)
console.log(numEx)

const newnumEx1=numEx.map( (num)=> num+100)//this map funtion does its operations and then pass it to next
                    .map( (num)=> num+6)
                    .filter((num)=>num>110)
console.log(newnumEx1)


const total=numEx.reduce(function(acc,curVal){
    console.log(`accumulator- ${acc} , currentValue -${curVal}`)
    return acc+curVal
},0)
console.log(total)

// total number of copies sold of all the books
const totalCopies=books.reduce((acc,item)=>(acc+item.copiesSold),0);
    //reduce function iterates over each book, item refers to each book object in the array and item.copiesSold is added to acc in each iteration
console.log(totalCopies)