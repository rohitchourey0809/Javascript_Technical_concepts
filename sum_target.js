function sumPairs(arr, targetSum) {
    const seenNumbers = new Set();
  
    for (let num of arr) {
        console.log("nuym" , num)
      const complement = targetSum - num;
      console.log("complement" , complement)
  
      if (seenNumbers.has(complement)) {
        console.log("seenNumbers.has(complement)",seenNumbers.has(complement))
        console.log("[complement, num]",[complement, num])
        return [complement, num];
      }
  
    //   seenNumbers.add(num);
    }
  
    return null;
  }
  
console.log(sumPairs([1, 2, 3, 4, 5], 9)); // Output: [4, 5]
// console.log(sumPairs([1, 2, 3, 4, 5], 10)); // Output: null
// console.log(sumPairs([3, 4, 5, 6, 7], 10)); // Output: [3, 7]
// console.log(sumPairs([1, 1, 2, 3, 4], 5)); // Output: [1, 4]
