let str = "123";
console.log(str.split("").reverse().join(""));

let ans = str.split("").reduce(function (acc, val) {
  return acc + val;
}, 0);
console.log("ans", ans);

let str1 = "123Hello";
let number = parseInt(str1, 3); // or parseFloat(str) for decimal values
console.log("Converted to number:", number);
