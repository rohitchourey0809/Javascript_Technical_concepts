let arr = [5, 3, 4, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//   const n = arr.length;

  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
// }
console.log(arr);
