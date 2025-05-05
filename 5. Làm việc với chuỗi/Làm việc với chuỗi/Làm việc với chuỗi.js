/*
Làm việc với chuỗi

    Keyword: JS string methods
    
    1. Length
    2. Find index
    3. Cut string
    4. Replace
    5. Convert to upper case
    6. Convert to lower case
    7. Trim
    8. Split
    9. Get a character by index
*/

// let myString = "Hoc JS tai JS JS F8!";
// let myString = "Hoc JS tai F8!";
let myString = "   Hoc JS tai F8!        ";

// 1. length
console.log(myString.length);

// 2. find index
console.log(myString.indexOf('JS')); // -1 <=> không tìm thấy, #-1 <=> tìm thấy
console.log(myString.search("JS")); // không hỗ trợ truyền tham số như indexOf, hỗ trợ tìm kiếm theo biểu thức chính quy
console.log(myString.indexOf("JS", 6)); 
console.log(myString.lastIndexOf("JS"));

// 3. Cut string
console.log(myString.slice(4, 6));
console.log(myString.slice(4));
console.log(myString.slice(0));
console.log(myString.slice(-3, -1)); // cắt từ phải sang trái

// 4. Replace
console.log(myString.replace("JS", "Javascript"));
console.log(myString.replace(/JS/g, "Javascript")); // tìm tất cả chuỗi JS có trong chuỗi myString

// 5. Convert to upper case
console.log(myString.toUpperCase());

// 6. Convert to lower case
console.log(myString.toLowerCase());

// 7. Trim
console.log(myString.trim().length);

// 8. Split
let languages = "JS, PHP, Ruby";
console.log(languages.split(', '));

let languages_2 = "Javascript";
console.log(languages_2.split(""));

// 9. Get a character by index
let myString2 = "Hieu Vo";
console.log(typeof myString2.charAt(10)); // truyền vị trí không tồn tại thì trả về chuỗi rỗng
console.log(typeof myString2[10]); // truyền vị trí không tồn tại thì trả về undefined
