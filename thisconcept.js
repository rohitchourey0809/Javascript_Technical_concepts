// var person = {
//     firstname: "rohit",
//     lastname: "chourey",
//     car : "suv100",
//     fullname : function (){
//         return this.firstname + " " + this.lastname
//     }
// }



// console.log(person.fullname())



// let x = this
// console.log(x)

// function myFunction() {
//     return this;
//   }

//   console.log("myFunction()",myFunction())

//   <-------------------zhbfdz----------------->

const person1 = {
    fullname : function(){
       return this.firstname + " " + this.lastname
    }
}
const person3 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }


const person2 = {
    firstname : "rohit2",
    lastname : "chourey2"
}
const person4 = {
    firstName:"John",
    lastName: "Doe",
  }
  
let X = person1.fullname.call(person2)
console.log("x",X)

let Y = person3.fullName.call(person4); 
console.log("Y",Y)