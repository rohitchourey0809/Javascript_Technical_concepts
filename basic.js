function sumPairs(arr, targetSum) {
    const seenNumbers = {};
  
    for (let num of arr) {
        console.log(num,"num")
      const complement = targetSum - arr[num];
      console.log("complement",complement)
  
      if (seenNumbers[complement] !== undefined) {
        console.log("seenNumbers[complement]",seenNumbers[complement])
        return [complement, num];
      }
  
      seenNumbers[num] = true;
    }
  
    return null;
  }
  
  // Test cases
//   console.log(sumPairs([1, 2, 3, 4, 5], 9)); // Output: [4, 5]
//   console.log(sumPairs([1, 2, 3, 4, 5], 10)); // Output: null
  console.log(sumPairs([3, 4, 5, 6, 7], 10)); // Output: [3, 7]
//   console.log(sumPairs([1, 1, 2, 3, 4], 5)); // Output: [1, 4]