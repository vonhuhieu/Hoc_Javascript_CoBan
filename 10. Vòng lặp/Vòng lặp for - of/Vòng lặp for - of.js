let languages = [
    "JS",
    "PHP",
    "Java",
];

for (let value of languages) {
    console.log(value);
}

let language = "Javascript";

for (let value of language) {
    console.log(value);
}

let myInfo = {
    name: "Hieu Vo",
    age: 22,
};

for (let value of Object.keys(myInfo)) {
    console.log(value);
    console.log(myInfo[value]);
}

console.log(Object.values(myInfo)); // trả về Array các value

for (let value of Object.values(myInfo)) {
    console.log(value);
}

