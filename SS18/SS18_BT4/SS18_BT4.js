// while (1) {
//     let str = prompt("Nhập vào một chuỗi bất kỳ:");
//     let search = prompt("Nhập từ khóa muốn tìm:");
//     if (str.includes(search) === true) {
//         alert("Tồn tại từ khóa tìm kiếm");
//     } else {
//         alert("Không tồn tại từ khóa cần tìm kiếm");
//     }
// }

while (1) {
    let str = prompt("Nhập một chuỗi bất kỳ:");
    let search = prompt("Nhập từ khóa cần tìm kiếm:");
    let flag = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === search) {
            flag = 1;
        }
    }
    if (flag = 1) {
        alert("Tồn tại từ cần tìm kiếm");
    } else {
        alert("Không tồn tại từ cần tìm kiếm");
    }
}