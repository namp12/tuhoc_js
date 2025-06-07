// ! cách tạo chuỗi

/**
let fullName = "phuong nam"  cách 1: nhanh nhất
let fullName = new String("phuong nam")  // cách 2 không tối ưu hơn, trả về object tốn dung lượng hơn
console.log(typeof(fullName))
 */

// // * 2. một số case sử dụng backslash (\)
// let fullName = "phuong nam \"la nguoi dep trai nhat the gioi\"" 
// console.log(fullName)

// // * 3. template string es6
// let fName = "phuong"
// let lName = "nam"
// console.log(`toi la: ${fName} ${lName}`)



/** 
// ! LÀM VIỆC VỚI CHUỖI

let myString = "nguyen the phuong nam, nam dep trai"
// * 1.length
console.log(myString.length) // # trả về độ dài của chuỗi

//* 2. Find index
console.log(myString.indexOf('nam')) // # tìm vị trí của code
console.log(myString.lastIndexOf('nam')) // # tìm vị trí cuối của kí tự
console.log(myString.search('phuong')) // # tìm kiếm

//* 3. Cut string (cắt chuỗi)
console.log(myString.slice(18, 23)) // # cắt từ điểm này đến điểm khác

// * 4. Replace ( để ghi đè )
console.log(myString.replace(/nam/g, 'Nammmm'))


// * 5. convert touper case (viết hoa tất cả các chữ)
console.log(myString.toUpperCase())

// * 6. convert to lower case (viết thường chuỗi)
console.log(myString.toLowerCase())

// * 7. trim (xóa khoảng trắng 2 đầu)
let myString1 = '  phuong nam  '
console.log(myString1.trim())

// * 8. split (đổi từ string -> array)
 let arr = 'js, c#. c++';
 console.log(arr.split(', '))  

 // *9. get a charater by index ()
 const myString3 = 'phuong nam';
 console.log(myString3.charAt(9)); //! check kí tự có trong str không

//* 10. include() - kiểm tra chuỗi con
let a = "phuong nam";
console.log(a.includes("phong")) //! kiểm tra xem chuỗi con có trong chuối gốc không

//* 11. startsWith() – Kiểm tra bắt đầu bằng
let b = 'nguyen the phuong nam';
console.log(b.startsWith('nguyen')); //! check kí tự đầu tiên của str

//* 12. endsWith() – Kiểm tra kết thúc bằng
let c = 'nguyen the phuong nam';
console.log(c.endsWith('nam'))  //! check kí tự cuối cùng của str

//* 13. repeat(n) - Lặp lại chuỗi
let d = "nguyen the phuong nam";
console.log(d.repeat(5)); //! lặp lại chuỗi n lần

//* 14. Destructuring Strings (tách từng kí tự trong chuỗi)
const [a, b, c] = 'cat';
console.log(a, b, c); //! c a t

//* 15. Spread Operator (...) với String
const name = [...'nguyen the phuong nam'];
console.log(name);

//* 16.Tagged Template Literals
function tag(strings, ...values) {
    console.log(strings); // ['Hello, ', '! You are ', ' years old.']
    console.log(values);  // ['Alice', 30]
    return 'Done!';
  }
  
  const name = 'Alice';
  const age = 30;
  
  const result = tag`Hello, ${name}! You are ${age} years old.`;
  console.log(result); // Done!
  
*/

  
