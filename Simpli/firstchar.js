// First charachter  Capitaal in array
let days = ["sun", "mun", "thurs"];

for (day of days) {
  day = day[0].toUpperCase() + day.substring(1);
  console.log(day);
}
