for (let i = 1; i <= 10; ++i) {
    console.log(i);
}

/*
Để vượt qua thử thách này, bạn cần kết hợp nhiều kiến thức đã học như: làm việc với array, đối tượng Math và loop.

👉 Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.

Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max.
*/
function getRandNumbers(min, max, length) {
    let array = [];
    for (let i = 0; i < length; ++i) {
        array.push(Math.random() * (max - min) + min);
    }
    return array;
}

console.log(getRandNumbers(4, 8, 3));