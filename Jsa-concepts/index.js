let  a = "rohit"   // a pointing to address of the value rohit
//(it saves a memory)

let b = a  // b pointing to a completely new address of the value rohit

  a = "chourey" 


console.log("ans",b)  //ans =  "rohit" since b points to a new address in the memory so changes in a will not effect b


let obj = { name: "Vivek", surname: "Bisht" };
let obj2 = obj;     //obj2 pointing to the same address 

// changing the value of obj1
obj.name = "change"   

console.log("obj2----->",obj2)  // Returns {name:"Akki", surname:"Bisht"} since both the variables are pointing to the same address.


let str = "123"
let  str2 = str;

str[0] = "3"

console.log(str)
