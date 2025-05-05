let date = new Date();
let date_test = Date(); // không thể truy xuất vào đối tượng

console.log(typeof date);
console.log(date);

console.log(typeof date_test);
console.log(date_test);

let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

console.log(month);
console.log(day);
console.log(`${day}/${month}/${year}`);