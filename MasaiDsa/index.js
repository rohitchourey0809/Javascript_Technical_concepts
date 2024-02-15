console.log("1st statement")
function delay(ms){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,ms)
    })
}

console.log("2st statement")

async function asynexample(){
try{
    await delay(2000) 
    // console.log(result)
    console.log("After 2 seconds");

    await delay(1000) 
    console.log("After 1 seconds");
}
catch(err){
    console.log(err)
}
    
}

asynexample()

console.log("3st statement")
delay(1000).then((data)=>{
    console.log("After 2 seconds")
}).then(()=>{
    delay(4000)
    console.log("After 4 more second")
}).then(() =>
 {
  
}
 )
.catch(()=>{

})

console.log("4st statement")