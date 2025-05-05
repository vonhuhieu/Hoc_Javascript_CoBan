function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

User.prototype.className = "21TCLC_KHDL";
User.prototype.getClassName = function() {
    return this.className;
};

let author = new User("Hieu", "Vo", "Avatar");
let user = new User("Vy", "Nguyen", "Avatar");

author.title = "Chia sẻ dạo tại F8";
user.comment = "hahaha";

console.log(author.className);
console.log(author.constructor === User);
console.log(author);
console.log(user);
console.log(author.getName());
console.log(user.getName());
console.log(user.getClassName());