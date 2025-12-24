while (1) {
    let inputNumber = +prompt("Nhập 1 số nguyên bất kỳ:");
    if (!Number.isInteger(inputNumber) || inputNumber < 2) {
        alert("Không phải là số nguyên tố!");
    } else {
        let isPrime = 1;
        for (let i = 2; i < inputNumber; i++) {
            if (inputNumber % i === 0) {
                isPrime = 0;
                break;
            }
        }
        if (isPrime === 1) {
            alert("Là số nguyên tố.");
        } else {
            alert("Không phải là số nguyên tố!");
        }
    }

}