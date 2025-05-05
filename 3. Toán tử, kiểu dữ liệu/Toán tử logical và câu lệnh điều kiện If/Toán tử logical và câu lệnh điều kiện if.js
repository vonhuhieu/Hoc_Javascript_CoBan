/*
    Hiểu hơn về câu lệnh điều kiện và phép so sánh
*/

let a = 1;
let b = 2;

let result = "A" && "B" && "C" && "D"; // D
let result_2 = null && "B" && "C"; // null
let result_3 = "A" && "B" && NaN && "D"; // NaN

console.log(result);
console.log(result_2);
console.log(result_3);

let result_4 = "A" || "B" || "C" || "D"; // A
let result_5 = null || "B" || "C" || "D"; // B
let result_6 = "A" || "B" || undefined || "D"; // A

console.log(result_4);
console.log(result_5);
console.log(result_6);