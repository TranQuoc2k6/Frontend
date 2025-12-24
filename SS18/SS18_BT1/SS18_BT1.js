while (1) {
    let inputNumber = +prompt("Enter number randum:");
    if (Number.isInteger(inputNumber) === true && inputNumber >= 1) {
        let sum = 0;
        for (let i = 1; i <= inputNumber; i++) {
            sum = sum + i;
        }
        alert(sum);
    } else {
        alert("Dữ liệu nhập vào không hợp lệ!!!")
    }
}

