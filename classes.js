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