// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         this.prop2=prop2;
//     }
// }
// let obj = new ClassName("arg1","arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);
//this keyword refer to the object it belongs to

// class Dog{
//     constructor(dogName,weight,color,breed){
//         this.dogName=dogName;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }
// let dog = new Dog("Javascript","is a",2.4,"brown","chihua");
// console.log(dog.dogName,dog.weight,dog.color,dog.breed);
//if the class is public then we can access the variables by object
//if it is private then the variable can be accessed by only methods

//Classes
//ClassName has first letter capital

//Constructor
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let p = new Person("Hjk","xsxa");
// console.log("Hi",p.firstname);


// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let p = new Person("Hjk");
// console.log("Hi",p.firstname,p.lastname);//Hi Hjk undefined



// class Person{
//     constructor(firstname,lastname="Doe"){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let p = new Person("Hjk");
// console.log("Hi",p.firstname,p.lastname);//Hi Hjk Doe
// let v = new Person("hello","hdus");
// console.log("Hi",p.firstname,p.lastname);//Hi Hjk Doe
//the default argument is always the tailing aurgument so that no position conflict is to be solved







//Methods:function on a class are called methods ,we don't use function keyword.We start directly with the
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("Hi there! I'm", this.firstname);
//     }
// }

// let p = new Person("Malika","van Putten");
// p.greet();
// Hi there! I'm Malika


//methods
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("Hi there! I'm", this.firstname);
//     }
//     compliment(name,object){
//         return "That's a wonderful" + object +", " + name;
//     }
// }

// let p = new Person("Malika","van Putten");
// let compliment=p.compliment("Harry","hat");
// console.log(compliment);
// let x=p.greet("Harry","hat");
// console.log(x);
//That's a wonderfulhat, Harry
// Hi there! I'm Malika
// undefined




//reusability of the code
// class Vehicle{
//     constructor(color,currentSpeed,maxSpeed){
//         this.color=color;
//         this.currentSpeed=currentSpeed;
//         this.maxSpeed=maxSpeed;
//     }
//     move(){
//         console.log("moving at",this.currentSpeed);
//     }
//     accelerate(amount){
//         this.currentSpeed+=amount;
//     }
// }

// class Motorcycle extends Vehicle{
//     constructor(color, currentSpeed, maxSpeed, fuel){
//         super(color,currentSpeed,maxSpeed);
//         this.fuel=fuel;
//     }
//     doWheelie(){
//         console.log("Driving on one wheel!");
//     }
// }

// let Motor= new Motorcycle("Black",0,250,"gasoline");
// console.log(Motor.color);





//third element of the class
//Properties:sometime also called fields,hold the data of the class
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
//class get two properties from the constructor
// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname=firstname;
//         this.#lastname=lastname;
//     }
// }
// let p = new Person("Maria","Saga");
//     console.log(p.firstname);//undefined


// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         if(firstname.startsWith("M")){
//             this.#firstname=firstname;
//         }
//         else{
//             this.#firstname="M"+firstname;
//         }
//         this.#lastname=lastname;
//     }
// }
//Getters and setters
// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname=firstname;
//         this.#lastname=lastname;
//     }
//     get firstname(){
//         return this.#firstname;
//     }
//     set firstname(firstname){
//         this.#firstname=firstname;
//     }
//     get lastname(){
//         return this.#lastname;
//     }
//     set lastname(lastname){
//         this.#lastname=lastname;
//     }
// }
// let p = new Person("Maria","Doe");
// console.log(p.firstname);
// console.log(p.firstname="Hello");




// //Object.prototype
// class Person{
//         constructor(firstname,lastname){
//             this.firstname=firstname;
//             this.lastname=lastname;
//         }
//         greet(){
//             console.log("Hi there! I'm");
//         }
//     }
//     Person.prototype.introduce = function () {
//         console.log("Hi ,I'm",this.firstname)
//     };
//     Person.prototype.favoriteColor="green";

//     let p =new Person("Maria","Saga");
//     console.log(p.favoriteColor);
//     p.introduce();