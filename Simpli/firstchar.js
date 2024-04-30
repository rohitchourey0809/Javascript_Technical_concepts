// First charachter  Capitaal in array
let days = ["sun", "mun", "thurs"];

// for (day of days) {
//   day = day[0].toUpperCase() + day.substring(1);
//   console.log(day);
// }

for(var i = 0; i<days.length; i++) {
  days[i] = days[i][0].toUpperCase() + days[i].substring(1);
}
console.log(days)