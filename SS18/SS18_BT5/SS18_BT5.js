while (1) {
    let number = +prompt("Nhập a:");
    let numberHat = +prompt("Nhập b:");
    if (Number.isInteger(number, numberHat) === true) {
        let result = 1;
        for (let i = 1; i <= numberHat; i++) {
            result = result * number;
        }
        alert(result);
    } else {
        alert("Không hợp lệ!")
    }

}