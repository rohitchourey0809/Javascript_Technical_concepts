function sumPairs(arr,target){
    for(let i = 0; i<arr.length-1;i++){
        for (let j = i+1;j<arr.length;j++){
            if(arr[i]+arr[j] === target){
                return [arr[i],arr[j]]
            }
        }
    }
    return null
}
console.log(sumPairs([1, 2, 3, 4, 5], 9)); // Output: [4, 5]