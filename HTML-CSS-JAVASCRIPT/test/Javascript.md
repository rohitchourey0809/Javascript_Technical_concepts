<!-- https://medium.com/@swati.developer17/part-12-settimeout-closures-interview-questions-cfa0d402831f -->
<!-- function x(){
    for(var i = 1; i<=10; i++){
        setTimeout(function(){
            console.log(i)
        },i*1000)

      console.log("Learn")
    }
}
x()

That’s why it prints 11 every time🤷🏻‍♀️. Because all of these copies of callback functions are referring to same spot in memory🤦🏻‍♀️. Which now have run 10 times and it’s value became 11 because of increment in for loop🙄
output
Learn
Learn
Learn
Learn
Learn
Learn
Learn
Learn
Learn
Learn
11
11
11
11
11
11
11
11
11
11
 -->

<!-- 1nd way to fix this -->
function x(){
    for(var i = 1; i<=10; i++){
     ( function(index){
            setTimeout(function(){
            console.log(index)
        },i*1000)
      })(i)
        console.log("Learn")  
    }
}
x()

Learn
Learn
Learn
Learn
Learn
Learn
Learn
Learn
Learn
Learn
1
2
3
4
5
6
7
8
9
10

<!-- 2nd way to fix this -->
<!-- use let instead for var because let is a blocked scoper for everyt iteration its a new one -->
function x(){
    for(var i = 1; i<=10; i++){
        setTimeout(function(){
            console.log(i)
        },i*1000)

      console.log("Learn")
    }
}
x()

<!-- Javascript data types practice question -->

console.log(1 == "1")
true

console.log(1 === "1")
false

console.log(typeof null)
{}

console.log(typeof undefined)
undefined