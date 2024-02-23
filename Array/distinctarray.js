// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let arr1 = [1,2,3]
let arr2 = [2,3,4]
let arr3 = [3,4,5]

var newarr = [...arr1,...arr2,...arr3]
// console.log(newarr)

var ans =  new Set(newarr)
console.log(ans)

// 1st method to find distinct elements in array

let obj = {}
for(var i = 0; i<newarr.length; i++){
if(obj[newarr[i]] == undefined){
    obj[newarr[i]] = 1
}else{
    obj[newarr[i]]++
}
}
 var arr = []
for(key in obj){
    if(obj[key] > 1){
        console.log(obj)
        arr.push(key)
    }
}
console.log(arr)


//2nd method


    
    
    
    




// Write a function that takes n number of arrays of integers and returns an array of distinct integers i.e the integers should appear only once among the input arrays. Example: [1,2,3], [2,3,4], [3,4,5] => [1,5]. Note: number of arrays can be n. The function should work when inputs are increased or decreased.
