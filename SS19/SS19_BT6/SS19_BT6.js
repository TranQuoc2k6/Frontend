let inputNumber = +prompt("Enter number randum:");
let number = [];
for (let i = 1; i <= inputNumber; i++) {
    if (inputNumber % i === 0) {
        number.push(i);
    }
}
console.log(`Các ước của ${inputNumber} = ${number.join(', ') + '.'}`);