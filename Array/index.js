
let arr = [1,2,3,4]



//shallow copy
let arr2 = [...arr];
arr2[0] = 10
console.log("shallowcopy",arr)



let arr3 = arr  //deep copy  memory address store
arr3[0] = 11

console.log("deepcopy", arr3);
