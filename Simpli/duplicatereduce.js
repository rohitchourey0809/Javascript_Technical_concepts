
// find the number of dupplicate by reduce method
const dup = [1,1,1,1,2,2,2,3,3,5]

let ans = dup.reduce((obj,value)=>{
    // console.log(obj,obj[value])
    //  console.log("value",value)
    if(obj[value] === undefined){
        obj[value] = 1
        return obj
    }else{
          obj[value]++
          return obj
    }
},{})
console.log(ans)