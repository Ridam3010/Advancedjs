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

// const person={
//     firstName:"John",
//     lastNmae:"Doe",
//     age:50
// };

// let{firstName,lastName}=person;
// console.log(firstName);
//The order does not matter
// let{lastName,firstName}=person;
// console.log(firstName);
//destructuring is not destructive
//destructuring does not change the original copy

// let{firstName,lastName,country="US"}=person;

//Alias
// let{firstName:name}=person;
// console.log(name);//John
// console.log(firstname);//Not defined

// let name="GurukulTheSchooles";

// let[a1,a2,a3,a4,a5]=name;
// console.log(a1,a2,a3,a4,a5);//G u r u k


//Array Destructuring
// const fruits=["Bananas","Oranges","Apples","Mangos"];
// // let[fruit1,fruit2]=fruits;
// let[fruit1,,,fruit2]=fruits;
// console.log(fruit1,fruit2);//Bananas Mangos

// const fruits=["Bananas","Oranges","Apples","Mangos"];
// let{[3]:fruit1,[1]:fruit2}=fruits;//Mangos Oranges
// console.log(fruit1,fruit2);

//The Rest Property
//the remaining aurgument can be held by last aurgument

// const numbers=[10,20,30,40,50,60,70];

// const[a,b,...rest]=numbers;
// console.log(a,b,rest);//10 20 [ 30, 40, 50, 60, 70 ]

//Destructing maps
// const fruits=new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["orange",200]
// ]);
// let text="";
// for(const[key,value]of fruits){
//     text+=key+"is"+value;
// }

// let firstname="John";
// let lastname="Doe";

// [firstname,lastname]=[lastname,firstname];


//Javascript exponential
// let x=5;
// let z=x**2;

// let x=5;
// let z=Math.pow(x,2);

// let x=5;
// x**=2;

//Array includes():case sensitive
// const fruits=["Banana","Orange","Apple","Mango"];
// console.log(fruits.includes("Mango"));//true

// console.log(fruits.includes("Banana",3));

//trailing comma
// const arr=["one",
//     "two",
//     "three",,
// ];
// console.log(arr.length);

// const person={
//     firstname:"john",
//     lastName:"doe",
//     age:30
// }

