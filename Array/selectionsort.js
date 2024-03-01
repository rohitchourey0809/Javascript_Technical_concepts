function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap minimum element with first element of unsorted part
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

const sortedArr = selectionSort([1, 5, 4, 5, 4, 8]);
console.log(sortedArr); // Output: [1, 4, 4, 5, 5, 8]
