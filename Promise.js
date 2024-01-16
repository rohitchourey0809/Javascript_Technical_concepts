function Lead(a){
    return new Promise((resolve,reject)=>{
        let x = 0;
      
          if(x == 0)
        {
          setTimeout(()=>{
              resolve(a)
             },1000);
        } else{
          reject("err",err)
        }
         
      })
}
 


Lead(20).then((data)=>{
   console.log("data",data)
}).catch((err)=>{
console.log("err",err)
})