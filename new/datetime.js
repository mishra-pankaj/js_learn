// date 
let date = new Date()
console.log(date.toString());

let created_date = new Date(2023,0,23)
console.log(created_date.toDateString());

let created_date2 = new Date(2023,0,25)
console.log(created_date2.toDateString());

diff = created_date2 - created_date;
console.log(diff.toString());
//timestamp
