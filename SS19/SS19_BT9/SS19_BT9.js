let inputNumber = +prompt("Enter Number Randum:");
let flag = 1;
if (inputNumber.isInteger(inputNumber) && inputNumber > 1) {
    for (let i = 2; i < Math.sqrt(inputNumber); i++) {
        if (inputNumber % i === 0) {
            flag = 0;
            alert('')
        }
    }
}
    