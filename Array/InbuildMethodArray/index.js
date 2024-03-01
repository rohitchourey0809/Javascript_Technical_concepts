async function foo(){
    let val = await "Hello world";
    return val 
}
foo().then(result=> {return console.log(result);});
// console.log("ans",ans)


// async function main(){
//     let result = await foo();
//     console.log(result,"result");
//     return result
// }
// var ans = main()
// console.log(ans)