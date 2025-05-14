//concurency
//asynchronous code and some options for multitasking with code
//callback
//promises
//async and await

//callback
//just a function that takes another function as a aurgument which is then called when rets of the initial function has finidhed.
// function dosomething(callback){
//     callback();
// }
// function sayHi(){
//     console.log("hi");
// }
// dosomething(sayHi);


// function judge(grade){
//     switch(true){
//         case grade=="A":
//             console.log("You got an",grade,":amazing");
//             break;
//             case grade=="B":
//             console.log("You got an",grade,":well done");
//             break;
//             case grade=="C":
//             console.log("You got an",grade,":good.");
//             break;
//             case grade=="D":
//             console.log("You got an",grade,":hmm....");
//             break;
//             default:
//                 console.log("An",grade,"! what?!");
//     }
// }
// function getGrade(score,callback){
//     let grade;
//     switch(true){
//         case score>=90:
//             grade="A";
//             break;
//             case score>=80:
//             grade="B";
//             break;
//             case score>=70:
//                 grade="C";
//             break;
//             case score>=60:
//             grade="D";
//             break;
//             default:
//                 grade="F";
//     }
//     callback(grade);
// }

// getGrade(85,judge);

//the callback become really valuable in an asychronous context
// setInterval(encourage,500);
// function encourage(){
//     console.log("Hello");
// }


//Promises
//we cam organize the sequence of ous code in slightly easier to maintain way.
//It will take two parameters both callbacks.we called them resolve and reject here

//when resolve is called ,the promise is presumedto be successful and whatever is between the arrow is returned and used as input for the then method on the promise object.If reject() is called,the promise failed and catch method on the promise object is excuted of the reject function
// let promise=new Promise9function(releaseEvents,reject)({}
//     let x=20;
//     if(x>10){
//         resolve(x);
//     }
//         else{
//         reject("low")
//     }
// })
// promise.then(
//     function(value){
//         console.log("Success:",value);
//     },
//     function(error){
//         console.log("error:",error);
//     }
// );


// const promise=new Promise((resolve,reject)=>{
//     resolve("success!");
// })
// .then(value =>{
//     console.log(value);
//     return "we";
// })
// .then(value =>{
//     console.log(value);
//     return "can";
// })
// .then(value =>{
//     console.log(value);
//     return "chain";
// })
// .then(value =>{
//     console.log(value);
//     return "promise";
// })
// .then(value =>{
//     console.log(value);
// })
// .catch(value=>{
//     console.log(value);
// })




//async and await
//With the async keyword,we can make a function return a promise.this makes promise nicer to read and look a lot like synchronous code.the more powerful await keyword to wait the promise is done ,await only work in an asynchronousfunction

// function saySomething(x){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve("something"+x);
//         },2000);
//     });
// }
// async function talk(x)
// {
//     const words=await saySomething(x);
//     console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);

//Event loop
//Js is a single threaded language.A thread is path of execution 
//call stack and callback queue
//the event loop is a process that is constantly monitoring this call stack and whnever there are task to do ,the event loop does them one by one 
// console.log("Hi there");
// add(4,5);
// function add(x,y){
//     return x+y;
// }

// console.log("hi there");
// setTimeout(()=>console.log("Sorry I m Late"),1000);
// console.log(add(4,5));
// function add(x,y){
//     return x+y;
// }
//the setTimeout() task gets outsourced to the browser's web API
//When its done,,this appears in a special place : the callback queue.When the call stack is empty(only then!),the event loop,will check the callback queue for work to do.If there are amny callback waiting,they will be exectuted,one by one.After every action,the event loop will check the callback queue


console.log("hi there");
setTimeout(()=>console.log("Sorry I m Late"),0);
console.log(add(4,5));
function add(x,y){
    return x+y;
}