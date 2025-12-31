let arrNum = [];
for (let i = 0; i < 5; i++) {
    let number = +prompt(`Enter number ${i + 1}:`);
    arrNum.push(number);
}
let countEvent = 0;
let countOdd = 0;
for (let i = 0; i < 5; i++) {
    if (arrNum[i] % 2 === 0) {
        countEvent++;
    } else {
        countOdd++;
    }
}
console.log(`Số lượng số chẵn là: ${countEvent}`);
console.log(`Số lượng số lẻ là: ${countOdd}`);
