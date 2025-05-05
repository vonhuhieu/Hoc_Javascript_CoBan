// Tham số hàm - JS cơ bản

/*
1. Tham số?
    - Định nghĩa?
    - Kiểu dữ liệu?
    - Tính private?
    - 1 tham số
    - Nhiều tham số
2. Truyền tham số
    - 1 tham số
    - Nhiều tham số
3. Arguments?
    - Đối tượng arguments
    - Giới thiệu vòng for
*/

function writeLog(message) {
    console.log(message);
}

writeLog("test message");

function writeLogTest() {
    let myString = "";
    console.log(arguments);
    for (let param of arguments) {
        console.log(param);
        myString += `${param} - `;
    }
    console.log(myString);
}

writeLogTest("Hieu", "Vy", "Liver");