while (1) {
    let inputNumber = +prompt("Nhập 1 số bất kì:");
    if (Number.isInteger(inputNumber) && inputNumber > 0) {
        let divisibleBy5 = [];
        for (let i = 1; i <= inputNumber; i++) {
            if (i % 5 === 0) {
                divisibleBy5.push(i);
            }
        }
        alert(`Các số chia hết cho 5 từ 1 đến ${inputNumber} là: ${divisibleBy5.join(', ') + '.'}`);
    }

}