const people = [
    { name: "John", age: 30, job: "developer" },
    { name: "Alice", age: 25, job: "designer" },
    { name: "Bob", age: 35, job: "developer" },
    { name: "Alice", age: 25, job: "designer" },
  ];
  
  const jobCounts = {};
  
  for (let index in people) {
    const person = people[index];
    console.log("person",person)
    const Job = person.job;
    const Name = person.name;
    const Age = person.age;
    jobCounts[Job] = (jobCounts[Job] || 0) + 1
    jobCounts[Name] = (jobCounts[Name] || 0) + 1
    jobCounts[Age] = (jobCounts[Age] || 0) + 1

}
  
  console.log(jobCounts);