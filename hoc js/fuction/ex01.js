//! declaration function (hàm định nghĩa)
//* có tính hoisting ngay lập tức gọi được hàm trước lúc khai báo hàm đó
let kq = tingtong(1, 2, 3, 4, 5, 6); //* gọi trước khi khai báo hàm
console.log(kq);

function tingtong(){
    let tong = 0;
    for(let i of arguments){
        tong += i;
    }
    return tong;
}

//!  experssion function( hàm biểu thức)
//* không có tính hoisting
// let kqua = tenHam(1, 2, 3);
// console.log(kqua);   //* nếu gọi hà lên trên này sẽ lỗi

let tenHam = function(){
    let tong = 0;
    for(let i of arguments){
        tong += i;
    }
    return tong;
}

let kqua = tenHam(1, 2, 3);
console.log(kqua);

//! arrow function( hàm mũi têm)
//* không có tính hosting ( nếu gọi trước hàm sẽ bị lỗi)

let tinhtong = (a, b) =>{
    let tong = a + b;
    console.log(tong)
}

let kqu = tinhtong(1, 2);




