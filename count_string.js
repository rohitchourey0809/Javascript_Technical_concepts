// let str = "Hello"
let str = [{
    name: "John",
    class: "10",
   
},{
    name: "John",
    class: "10",
   
}]
let obj = {}

for(const element of str){
 obj[element] =  (obj[element] || 0) + 1
}
console.log(obj)


for(const element in str){
    obj[element] =  (obj[element] || 0) + 1
   }
   console.log(obj)