let str = "123"
console.log(str.split('').reverse().join(''));

console.log(str.split("").reduce(function(acc,val){
    return acc+val
}))

let str1 = "123";
let number = parseInt(str1, 3); // or parseFloat(str) for decimal values
console.log("Converted to number:", number);
