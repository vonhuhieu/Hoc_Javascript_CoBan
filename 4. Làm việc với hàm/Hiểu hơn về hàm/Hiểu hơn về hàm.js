/*
Một số điều cần biết về function

1. Khi function đặt trùng tên?
2. Khai báo biến trong hàm?
3. Định nghĩa hàm trong hàm?
*/

function showMessage() {
    function showMessage2() {
        console.log("show message");
    }

    showMessage2();
}

showMessage();