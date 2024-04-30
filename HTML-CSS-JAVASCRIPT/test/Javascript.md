<!-- https://medium.com/@swati.developer17/part-12-settimeout-closures-interview-questions-cfa0d402831f -->
<!-- function x(){
    for(var i = 1; i<=10; i++){
        setTimeout(function(){
            console.log(i)
        },i*1000)

      console.log("Learn")
    }
}
x()

That’s why it prints 11 every time🤷🏻‍♀️. Because all of these copies of callback functions are referring to same spot in memory🤦🏻‍♀️. Which now have run 10 times and it’s value became 11 because of increment in for loop🙄
output
Learn
Learn
Learn
Learn
Learn
Learn
Learn
Learn
Learn
Learn
11
11
11
11
11
11
11
11
11
11
 -->

<!-- 1nd way to fix this -->
function x(){
    for(var i = 1; i<=10; i++){
     ( function(index){
            setTimeout(function(){
            console.log(index)
        },i*1000)
      })(i)
        console.log("Learn")  
    }
}
x()

Learn
Learn
Learn
Learn
Learn
Learn
Learn
Learn
Learn
Learn
1
2
3
4
5
6
7
8
9
10

<!-- 2nd way to fix this -->
<!-- use let instead for var because let is a blocked scoper for everyt iteration its a new one -->
function x(){
    for(var i = 1; i<=10; i++){
        setTimeout(function(){
            console.log(i)
        },i*1000)

      console.log("Learn")
    }
}
x()

<!-- Javascript data types practice question -->

console.log(1 == "1")
true

console.log(1 === "1")
false

console.log(typeof null)
{}

console.log(typeof undefined)
undefined

console.log(typeof NaN)
number



console.log(parseInt("123hello")) //123
console.log(parseInt(" 123hello ")) //123
console.log(parseInt(" 123  hello ")) //123
console.log(parseInt("10 20 30"))//10
console.log(parseInt("hello30"))//NaN
console.log(parseInt(" hello 30 ")) //NaN
console.log(parseInt("020")) //20
console.log(parseInt("0 20")) //0
console.log(parseInt("12",8)) //10 octal
console.log(parseInt("0x12")) //18 decimal
console.log(parseInt("10",16)) //16 decimal
<!--  -->

<!-- Javascript therotical and technical -->
Shallow copying `creates a new object` and `copies all the top-level properties of the original object into the new object`.

However, `if the original object contains nested objects (objects within objects), only references to those nested objects are copied`, not the nested objects themselves.

This means that `changes made to nested objects in the copied object will affect the original object` and vice versa, as they share the same references to the nested object

`let objA = { name: "John", age: 30, address: { city: "New York", country: "USA" } };`

`let objB = Object.assign({}, objA); // Shallow copy using Object.assign()`

`objB.name = "Jane"; // Modify a top-level property`
`objB.address.city = "San Francisco"; // Modify a nested object property`

`console.log(objA); // `

`{ name: "John", age: 30, address: { city: "San Francisco", country: "USA" } }`


Deep Copy:

`Deep copying creates a new object and recursively copies all properties and nested objects of the original object into the new object.`

`This means that changes made to the copied object or its nested objects do not affect the original object, as they are completely independent.`

`Deep copying in JavaScript is a bit trickier and often requires custom solutions, especially when dealing with complex nested objects. One common approach is to use JSON.parse(JSON.stringify(obj)), but it has limitations (e.g., it cannot handle functions or circular references).`

Here's an example using JSON.parse(JSON.stringify()):

`let objA = { name: "John", age: 30, address: { city: "New York", country: "USA" } };`
``let objB = JSON.parse(JSON.stringify(objA)); // Deep copy using JSON.stringify()``

`objB.name = "Jane";`
`objB.address.city = "San Francisco";`

console.log(objA); // { name: "John", age: 30, address: { city: "New York", country: "USA" } }

In this example, modifying properties of objB does not affect objA, as objB is a deep copy of objA, and they have independent references to all properties and nested objects.
