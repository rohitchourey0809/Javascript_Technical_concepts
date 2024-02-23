const arr = ["apple", "banana", "orange", "grape", "cherry"];

const sortedArr = Array.from(arr).sort((a, b) => b - a);

console.log(sortedArr);

console.log(arr.sort().reverse())