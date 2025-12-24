
alert("Bài 1:");
let currentYear = +prompt("Enter current year: ");
let dateOfBirth = +prompt("Enter date of birth: ");
let age = currentYear - dateOfBirth;
console.log(`Tôi năm nay ${age} tuổi`);

alert("Bài 2:");
let width = +prompt("Enter width: ");
let height = +prompt("Enter height: ");
let result = width * height;
console.log(`Result = ${result}`);

alert("Bài 3:");
let number1 = +prompt("Enter number 1: ");
let number2 = +prompt("Enter number 2: ");
let number3 = +prompt("Enter number 3: ");
let total = number1 + number2 + number3;
let average = total / 3; 
console.log(`Total = ${total}`);
console.log(`Averagr = ${average}`);

alert("Bài 4:");
let r = +prompt("Enter r:");
let perimeter = Math.PI * 2 * r;
let averageCircle = Math.pow(r, 2) * Math.PI;
console.log(`Perimeter = ${perimeter}`);
console.log(`AverageCircircle = ${averageCircle}`);
