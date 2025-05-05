/*
Mảng trong JS - Array

1. Tạo mảng
    - Cách tạo
    - Sử dụng cách nào? Tại sao?
    - Kiểm tra dataType
2. Truy xuất mảng
    - Độ dài mảng
    - Lấy phần tử theo index
*/

let languages = [
    "JS",
    "PHP",
    "Ruby",
    "Dart",
    null,
    undefined,
    function () {

    },
    {},
    123
];

console.log(languages);

console.log(Array.isArray(languages));

console.log(languages.length);

console.log(languages[3]);