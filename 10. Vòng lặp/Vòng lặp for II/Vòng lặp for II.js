/*
Cho trước mảng numbers, hãy viết hàm getTotal trả về tổng giá trị các phần tử của mảng.
*/
function getTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; ++i) {
        total += arr[i];
    }
    return total;
}

let numbers = [2, 3, 4, 6.5];
console.log(getTotal(numbers));