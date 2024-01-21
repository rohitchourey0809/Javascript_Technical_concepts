const people = [
    { name: "John", age: 30, job: "developer" },
    { name: "Alice", age: 25, job: "designer" },
    { name: "Bob", age: 35, job: "developer" },
    { name: "Alice", age: 25, job: "designer" },
  ];

  var values1 = people.map((ele)=>ele.name)
  var values2 = people.map((ele)=>ele.age)
  var values3 = people.map((ele)=>ele.job)
  const value = [...values1, ...values2, ...values3]
  console.log("values------>", value)

   var perobj = {}
  for(const element of value){
    perobj[element] = (perobj[element] || 0) + 1
  }

  console.log("perobj------>", perobj)
  