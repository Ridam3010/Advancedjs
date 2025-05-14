// let spread=["so","much","fun"];
// let message=["Javascript","is",...spread,"and","very","powerful"];
// function addtwonumber(x,y){
//     console.log(x+y);
// }
// let arr=[5,9];
// addtwonumber(...arr);
// function someFunc(param1,param2){
//     console.log(param1,param2);
// }
// someFunc("Hi","there!","How are you");
// function someFunc1(param1,param2){
//     console.log(param1,...param2);
// }
// someFunc1("Hi","there!","How are you");
// function addtwonumber(x,y){
//         console.log(x+y);
//     }
// let addtwonum=(x,y)=>x+y;
// let result=addtwonum(5,5);
// console.log(result);
// var : function scope(can also be accesed before declaring)
// let: block scope
// let resultarr=[];
// for(let i=0;i<10;i++){
//     let result=addtwonum(i,2*i);
//     resultarr.push(result);
// }
// console.log(resultarr);
// function testAvailibility(x){
//     console.log("Available here:",x);
// }
// testAvailable("Hi");
// console.log("Not available here:",x);
// Ouput:
// ReferenceError: testAvailable is not defined
// function testAvailibility(){
//     let y="Local variable!";
//     console.log("Available here:",y);
// }
// testAvailable();
// console.log("Not available here:",y);
// function testAvailibility(){
//     let y="I'll return";
//     console.log("Available here:",y);
//     return y;
// }
// let z=testAvailibility();
// console.log("Outside the function:",z);
// console.log("Not available here:",y);
// Available here: I'll return
// Outside the function: I'll return
// C:\Users\ridam\javascript\1.js:50
// console.log("Not available here:",y);
//                                   ^

// ReferenceError: y is not defined

// function doingStuff(){
//     if (true){
//         var x = "local";
//     }
//     console.log(x);
// }
// doingStuff();
// output:local

// function doingStuff(){
//     if (true){
//         console.log(x);
//         let x = "local";
//     }   
// }
// doingStuff();
// Output:ReferenceError: Cannot access 'x' before initialization

// function doingStuff(){
//     if (true){
//         console.log(x);
//         var x = "local";
//     }   
// }
// doingStuff();
// output:undefined
// const: block scope
// function testAvailibility(){
//     const y="I'll return";
//     console.log("Available here:",y);
//     return y;
// }
// const z=testAvailibility();
// console.log("Outside the function:",z);
// console.log("Not available here:",y);//ReferenceError: y is not defined
// let globalVar="Accessible everywhere!";
// console.log("Outside function:",globalVar);
// function creatingNewScope(x){
//     console.log("Access to global vars inside function.",globalVar);
// }
// creatingNewScope("Some parameter");
// console.log("Still available:",globalVar);
// let x="global";
// function doingStuff(){
//     let x="local";
//     console.log(x);
// }
// doingStuff();
// console.log(x);
// output:
// local
// global
// let x="global";
// function doingStuff(){
//     x="local";
//     console.log(x);
// }
// doingStuff();
// console.log(x);
// output:
// local
// local
// let x="global";
// function doingStuff(x){
//     console.log(x);
// }
// doingStuff("param");
// output:
// param
// function confuseReader(){
//     x="Guess my scope...";
//     console.log("Inside of function:",x);
// }
// confuseReader();
// console.log("Outside of function:",x);
// output:
// Inside of function: Guess my scope...
// Outside of function: Guess my scope...

// Immediately invoked function expression
// (function (){
//     console.log("IIFE!");
// })();
// (()=>{
//     console.log("run right away");
// })();

// Recursive function
// function getrecursive(nr){
//     console.log(nr);
//     getrecursive(--nr);
// }
// getrecursive(3);
//Stack overflow

// function getrecursive(nr){
//     console.log(nr);
//     if(nr>0)
//     getrecursive(--nr);
// }
// getrecursive(3);
// output:
// 3
// 2
// 1
// 0

// function getrecursive(nr){
//     console.log(nr);
//     if(nr>0)
//     getrecursive(nr-1);
//     else
//     console.log("Done with the recusion");
//     console.log("function ended",nr);
// }
// getrecursive(3);
// output:
// 3
// 2
// 1
// 0
// Done with the recusion
// function ended 0
// function ended 1
// function ended 2
// function ended 3
// function getrecursive(nr){
//     console.log(nr);
//     if(nr>0){
//         getrecursive(--nr);
//     }
// }
// getrecursive(3);
//The performance of recursion is slightly slower than iteration

//NESTED FUNCTION
// function doOuterFunction(nr){
//     console.log("Outer Function");
//     doInnerFunction(nr);
//     function doInnerFunction(x){
//         console.log(x+7);
//         console.log("I can access outer variable:",nr);
//     }
// }
// doOuterFunction(2);

//Anonymous Functions
// function (){
//     console.log("Hello");
// }

let FuncVariable=function (){
    console.log("Not so secret though.");
};

//like passing in a function as a parameter.this concept adds another

//Pasing a function as an argument in another function
// function doFlexiblestuff(executeStuff){
//     executeStuff();
//     console.log("Inside doflexible.");
// }
// doFlexiblestuff(FuncVariable);


//in JS there are many built in func:
// let youGotThis=function () {
//     console.log("You're doing really well,keep coding!");
// };
// setTimeout(youGotThis,1000);
// setInterval(youGotThis,1000);
// let testFunction=function(){
//     console.log("Hello");
// }();

(
    function () {
    console.log("Hello");
})();
(function (){
    let FirstName="Laurance";
})();
let result=(function () {
    let firstName="Laurance";
    return firstName;
})();
