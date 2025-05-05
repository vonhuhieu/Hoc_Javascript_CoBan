/*
Làm việc với Array
Keyword: JS array methods

1. toString
2. join
3. pop
4. push
5. shift
6. unshift
7. splicing
8. concat
9. slicing
*/

let languages = [
    "JS",
    "PHP",
    "Ruby",
];

// 1. toString
console.log(languages.toString());
console.log(typeof languages.toString());

// 2. join
console.log(languages.join(", "));

// 3. pop: xóa element cuối mảng và trả về phần tử đã xóa, nếu sử dụng khi mảng rỗng sẽ trả về undefined
console.log(languages.pop());
console.log(languages);

// 4. push
console.log(languages.push("Dart", "Java"));
console.log(languages);

// 5. shift: tương tự pop nhưng là xử lí với element đầu mảng
console.log(languages.shift());
console.log(languages);

// 6. unshift: tương tự push nhưng là thêm vào đầu mảng
console.log(languages.unshift("C#", "C++"));
console.log(languages);

// 7. splicing
let languages_2 = [
    "JS",
    "PHP",
    "Ruby",
];

// languages_2.splice(1, 1); // vị trí phần tử 1, số lượng phần tử xóa: 1
// languages_2.splice(1, 2); // vị trí phần tử 1, số lượng phần tử xóa: 2
// languages_2.splice(1, 2, "Dart", "Java");

console.log(languages_2);

// 8. Concat

let languages_3 = [
    "Dart",
    "Ruby"
];

console.log(languages_2.concat(languages_3));
console.log(languages_3.concat(languages_2));

// 9. Slicing
console.log(languages_2.slice(-2, -1));