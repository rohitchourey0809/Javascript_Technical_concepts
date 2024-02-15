// Input: [2, 7, 11, 15], target = 9
// Output: [2, 7] (or [7, 2])



// function targetElement(){
//     var tararr = []
//     for(var i = 0; i<arr.length; i++){
//         for(var j = i+1; j<arr.length-1;j++){
//             if(arr[i]+arr[j] == target){
//                 tararr.push(arr[i],arr[j])
//             }
           
//         }
//     }
//     console.log(tararr)
// }
// let arr = [2, 7, 11, 15]
// target = 9;
// targetElement(arr,target)


function twoSum(nums, target){
    let obj = {};
    for(let i = 0; i<nums.length; i++){
           let char = nums[i]
           let complement = target - nums[i]
           console.log(complement)

           console.log("obj.hasOwnProperty(complement)",obj.hasOwnProperty(complement))

           if(obj.hasOwnProperty(complement)){
              console.log("[obj[complement],i]",[obj[complement],i])
              return [obj[complement],i]
           }
           obj[char] = i;
    }
    return null;
}


const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log("result",result)

let val = 2;
let obj1 = {}

function check(){
  if(obj1.hasOwnProperty(val)){
      console.log("obj1[val]",[obj1[val]])
  }
}


check()
