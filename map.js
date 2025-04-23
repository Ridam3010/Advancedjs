//create map
// const fruits= new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["orange",200]
// ]);
// console.log(fruits);

//set method
// const fruits= new Map();
// //set map values
// fruits.set("apples",500);
// fruits.set("bananas",300);
// fruits.set("orange",200);

// console.log(fruits);

//get method
// fruits.get("apples");
// console.log(typeof fruits);//object
// console.log(fruits.size);//3
// console.log(fruits.delete("apple"));delte that key
// fruits.clear();clear all
//fruits.has();//check membership(true or false)
// let text="";
// fruits.forEach(function(value,key){
//     text+=key+'='+value;
// })
// console.log(text);//apples=500bananas=300orange=200

// let text="";
// for(const x of fruits.entries()){
//     text+=x;
// }
// console.log(text);//apples,500bananas,300orange,200

// let text="";
// for(const x of fruits.keys()){
//     text+=x;
// }
// console.log(text);applesbananasorange

// let text="";
// for(const x of fruits.values()){
//     text+=x;
// }
// console.log(text);500300200
// let sum=0;
// for(const x of fruits.values()){
//     sum+=x;
// }
// console.log(sum);//1000


//Create Objects
// const apple={name:'Apple'};
// const banana={name:'Banana'};
// const orange={name:'Orange'};

// const fruits = new Map();
// fruits.set(apple,500);
// fruits.set(banana,300);
// fruits.set(orange,200);
//the key is an object,not a string
// fruits.get("apple");//undefined


//Javascript Destructuring

const person={
    firstName:"John",
    lastNmae:"Doe",
    age:50
};

// let{firstName,lastName}=person;
// console.log(firstName);
//The order does not matter
// let{lastName,firstName}=person;
// console.log(firstName);
//destructuring is not destructive
//destructuring does not change the original copy

// let{firstName,lastName,country="US"}=person;

//Alias
let{firstName:name}=person;
console.log(name);//John