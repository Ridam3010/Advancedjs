
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
class Person{
    #firstname;
    #lastname;
    constructor(firstname,lastname){
        this.#firstname=firstname;
        this.#lastname=lastname;
    }
    get firstname(){
        return this.#firstname;
    }
    set firstname(firstname){
        this.#firstname=firstname;
    }
    get lastname(){
        return this.#lastname;
    }
    set lastname(lastname){
        this.#lastname=lastname;
    }
}
let p = new Person("Maria","Doe");
console.log(p.firstname);
console.log(p.firstname="Hello");