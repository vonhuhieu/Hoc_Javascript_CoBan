/*
Kiểu số (Number) trong JS

Keyword: JS number methods

1. Tạo giá trị Number
    - Các cách tạo
    - Dùng cách nào? Tại sao?
    - Kiểm tra dataType

2. Làm việc với Number
    - toString
    - toFixed
*/

let age = 18;
let PI = 3.14;
let result = 20 / "ABC"; // NaN
let myString = age.toString();

console.log(result); // NaN
console.log(typeof result); // Vẫn là Number nhưng sẽ trả về NaN
console.log(isNaN(result));
console.log(isNaN(20/1));
console.log(typeof myString);
console.log(typeof PI.toFixed()); // String
console.log(PI.toFixed());