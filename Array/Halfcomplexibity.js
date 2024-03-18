let arr = [1, 2, 3, 4, 5];

let i = 0;
let j = arr.length - 1;

let l = arr.length;

while (i < l / 2) {
  // let temp = arr[i]
  // arr[i] = arr[j]
  // arr[j] = temp
  [arr[i], arr[j]] = [arr[j], arr[i]];
  i++;
  j--;
}

//2nd Example
// let str = "this is rohit";
// let arr = str.split(" ");
// console.log(arr);

// let i = 0;
// let j = arr.length - 1;
// let l = arr.length - 1;

// while (i < l / 2) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
//   i++;
//   j--;
// }
// console.log(arr.join(" "));
