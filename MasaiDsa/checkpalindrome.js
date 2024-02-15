
// Output: true;



function checkPalindrome(str){
    let cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    console.log("cleanStr",cleanStr.length)
    for (let i = 0; i<Math.floor(cleanStr.length/2); i++){
        console.log(cleanStr[i],cleanStr[cleanStr.length - 1 - i])
        if(cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]){
            return false;
        }
        return true;
    }
}
let str =  "A man, a plan, a canal, Panama"

let result = checkPalindrome(str);
console.log("result",result)







