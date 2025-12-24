//Bài 1:
let carts = [150000, 200000, 100000];
let total = 0;
for (let i = 0; i < carts.length; i++) {
    total += carts[i];
}
alert(total);

//Bài 2:
console.log("Bài 2:");
let payment = [200000, 150000, 300000, 500000];
let sum = 0;
let display = 0
for (let i = 0; i < payment.length; i++) {
    display += payment[i];
    if (display > 1000000) {
        break;
    }
    console.log(`Lần lặp ${i + 1}: ${sum} + ${payment[i]} = ${display}`);
    sum += payment[i];
}

//Bài 3:
console.log("Bài 3:");

let passwork = "123456";
let inputPasswork = prompt("Nhập mật khẩu của bạn:");
for (let i = 4; i >= 0; i--) {
    if (inputPasswork === passwork) {
        console.log("Bạn đã nhập đúng mật khẩu!");
        break;
    } else {
        if (i === 0) {
            console.log("Tài khoản bị khóa!");
            break;
        }
        console.log(`Sai mật khẩu!Bạn còn ${i} lần thử.`);
        inputPasswork = prompt("Nhập mật khẩu của bạn:");
    }
}