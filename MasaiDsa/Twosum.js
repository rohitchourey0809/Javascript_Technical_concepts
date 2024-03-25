let arr = [1, 10, 13, 5, 4]; //Target 9
let target = 9;

let i = 0;
let j = arr.length - 1;

arr.sort((a, b) => a - b);
const TwoSum = (arr, target) => {
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === target) {
      return [arr[i], arr[j]];
    } else if (sum < target) {
      i++;
    } else if (sum > target) {
      j--;
    }
  }
};

let ans = TwoSum(arr, target);
console.log("ans", ans);
