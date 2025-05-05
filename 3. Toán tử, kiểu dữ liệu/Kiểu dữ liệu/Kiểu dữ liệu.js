/*
Kiểu dữ liệu trong JS

1. Dữ liệu nguyên thủy - Primitive Data
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol

2. Dữ liệu phức tạp - Complex Data
    - Function
    - Object
*/

// Number type
let a = 1, b = 2, c = 1.5;

console.log(typeof a);

// String type
let fullName = "My name is \"Vonhuhieu\"";
console.log(fullName);
console.log(typeof fullName);

// Boolean
let isSuccess = true; // viết đúng
let isSuccessFalse = "true"; // viết sai vì đây là String type
console.log(typeof isSuccess);

// Undefined type
let age;
console.log(typeof age);

// Null
let isNull = null; // nothing
console.log(typeof isNull);

// Symbol
let id = Symbol("id"); // unique
let id2 = Symbol("id"); // unique
console.log(id === id2);
console.log(typeof id);

// Function
let myFunction = function () {
    alert("Hi. Xin chào các bạn");
}

myFunction();

console.log(typeof myFunction);

// Object types
let myObject = {
    name: "Hieu Vo",
    age: 22,
    address: "Danang",
    myFunction: function() {

    }
};

console.log("myObject", myObject);
console.log(typeof myObject);

// Array types
let myArray = [
    "JS",
    "PHP",
    "Ruby"
];

console.log(myArray);
console.log(typeof myArray)
