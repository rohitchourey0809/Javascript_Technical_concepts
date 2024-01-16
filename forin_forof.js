const str = "Hello"

// calculate each term of the string

var obj = {}

// ## concept of for of loop ##
// 1. it iterate the each value of the string



// for(let element of str){
//     obj[element] = (obj[element] || 0) + 1
//     console.log("element: " , obj[element])
// }
// console.log("forofObject: " , obj)


// <-------------------------------------------------------------------->
// Example 2

// var person = {
//     name: "John",
//     developer:"Software Engineer",
//     age:"23"
// }

// var perobj = {}

// var val = Object.values(person)
// console.log("valu",val)

// for(let element of val){

//   perobj[element] = (perobj[element] || 0) + 1;
// }

// console.log("perobj",perobj)


// <---------------------------------------------------------------->
const people = [
    { name: "John", age: 30, job: "developer" },
    { name: "Alice", age: 25, job: "designer" },
    { name: "Bob", age: 35, job: "developer" },
    { name: "Alice", age: 25, job: "designer" },
  ];


var perobj = {}

for(let element of people){
    let Name = element.name
    let Age = element.age
    let Job = element.job

    perobj[Name] = (perobj[Name] || 0) + 1
    perobj[Age] = (perobj[Age] || 0) + 1
    perobj[Job] = (perobj[Job] || 0) + 1
    
}

console.log("perobj", perobj)





// ## concept of for in loop ##
// 1. it iterate the each index of the string

// for(let element in str){
//     let char = str[element]
//     obj[char] = (obj[char] || 0) + 1
//     console.log("char",obj[char])

// }
// console.log("forinObject: " , obj)


