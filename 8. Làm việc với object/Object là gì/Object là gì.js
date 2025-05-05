let emailKey = "myEmail";
let myInfo = {
    name: "Hieu Vo",
    age : 22,
    address: "Danang, VN",
    [emailKey]: "vonhuhieu2003@gmail.com",
    getName: function() {
        return this.name;
    },
};


// Function => Phương thức / method
// Others => Thuộc tính / property

myInfo.email = "vonhuhieu2003@gmail.com"; 

let myKey = "address";

delete myInfo.email;
delete myInfo[emailKey];

console.log(myInfo);
console.log(myInfo.age);
console.log(myInfo[myKey]);
console.log(myInfo.getName());