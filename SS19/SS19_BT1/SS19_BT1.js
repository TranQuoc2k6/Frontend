let arrNumber = [];
for (let i = 0; i < 5; i++) {
    arrNumber[i] = +prompt(`Nhập số nguyên thứ ${i+1}`);
}
let sum = 0;
for(let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] % 2 !== 0) {
        sum += arrNumber[i];
    }
}
console.log(`Tổng các số lẻ trong các số đã nhập là: ${sum}`);
