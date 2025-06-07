// ! kiểu số trong js
/** 
// * 1. tạo giá trị Number
    // * - cách tạo
    let age = 18;
    let PI = 3.14;

    let otherNumber = new Number(9); //* không nên dùng vì loằng ngoằng hơn
    console.log(typeof(otherNumber)); //* ra object khó khăn khi kiểm tra

    let result = 20 / 'abc'
    console.log(isNaN(result));
*/  

// * 2 làm việc với Number

// //* 2.1: number()  #(đổi từ string thành số)
// let num1 = Number("123") //! chuỗi là số thì đổi về số bình thường
// let num2 = Number("abc") //! chuỗi là 1 string thì thành NaN
// console.log(num1) //* 123
// console.log(num2) //* NaN
// let num3 = "1234"
// console.log(typeof(Number(num3))) 

// //* 2.2: number.isInteger #(kiểm tra xem có phải só nguyên hay không)
// console.log(Number.isInteger(10)) //! true
// console.log(Number.isInteger(10.5)) //! false
// console.log(Number.isInteger("10")) //! false

// //* 2.3: number.isNaN() #(kiểm tra xem giá trị có phải NaN hay không)
// console.log(Number.isNaN(10)) //! false
// console.log(Number.isNaN(10.5)) //! false
// console.log(Number.isNaN(NaN)) //! true


// //* 2.4: number.parserInt() #(chuyển đổi một chuỗi thành số nguyên)
// console.log(Number.parseInt(10.5))
// console.log(Number.parseInt("123abc"))

// //* 2.5: Number.parseFloat() Dùng để chuyển đổi một chuỗi thành số thực (float).
// console.log(Number.parseFloat("123.45")); // 123.45
// console.log(Number.parseFloat("123abc")); // 123

// //* 2.6: Number.isFinite()  Kiểm tra xem một giá trị có phải là một số hữu hạn hay không (không phải NaN, Infinity, hoặc -Infinity).
// console.log(Number.isFinite(123));  // true
// console.log(Number.isFinite(Infinity));  // false
// console.log(Number.isFinite(NaN));  // false

// //* 2.7: To string
// console.log(typeof(age.toString())) // đổi thành kiểu string
// var mystring = PI.toString() // cách 2 khai báo vào biến
// console.log(typeof(age))
// console.log(typeof(mystring))

// //* 2.8: toFixed(digits) làm tròn số với số chữ số thập phân cố định
// let num = 3.14321;
// console.log(num.toFixed(2)) //* làm tròn về 2 số

// // * 2.9: toPrecision(digits)  Làm tròn số với độ chính xác tổng thể.
// let num = 12.2345;
// console.log(num.toPrecision(5))


