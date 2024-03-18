let input1 = "Hello apple pie";

let input =  input1.split(" ")
console.log(input)

for(let i = 0; i<input.length; i++){
        let obj ={}
       let distinput =  input[i];
    for (let j = 0; j < distinput.length; j++) {
      var newwords = distinput[j]?.toLowerCase();
      obj[newwords] = (obj[newwords] || 0) + 1;
    }
    console.log(obj)
    for(key in obj){
        if(obj[key] == 1){
            // console.log(obj);
            console.log(key,obj[key])
           
        }
         
    }
    return;
    

}




let obj ={}