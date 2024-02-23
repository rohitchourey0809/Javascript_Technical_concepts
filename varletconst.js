console.log(a)
var a = 10    
var a = 20
// it is undefined

console.log(b)
let b = 10  // cannot access the value of b
// let b = 20 //cannot ve redclared

console.log(c)
const c = 10  // cannot access the value of c
c = 30   // cannnot reassign

// * ! Unlike var, variables declared with let and const are hoisted to the top of their block,
//  but they are not initialized. This is commonly known as the "temporal dead zone."


