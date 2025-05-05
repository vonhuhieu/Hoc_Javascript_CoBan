/*
    Các loại function

    1. Declaration function
    2. Expression function
    3. Arrow function
*/

showMessage(); // có thể được gọi trước khi được định nghĩa
showMessage2(); // không thể gọi trước khi được định nghĩa

function showMessage() {
    console.log("Declaration function");
};

let showMessage2 = function() {
    console.log("Expression function");
};

setTimeout(function autoLogin() { // đặt tên đề phòng trường hợp không biết chức năng của hàm

});

let myObject = {
    myFunction: function() {

    }
};

showMessage2();