//! khởi tạo mảng
// const arr = [1, 2, 3];
// arr.push(4, 5, 6, 7); //* thêm phần tử vào cuối mảng
// arr.pop()
// arr.shift()
// arr.unshift(0, 1)
// console.log(arr);

// console.log(arr.reverse())  //* đảo ngược mảng
// console.log(arr.sort())     //* sắp xếp mảng
// console.log()

//! tính tổng mảng
// const tinhTong = (arr) => {
//     let sum = 0;
//     arr.forEach(num => sum += num);
//     return sum;
//   };
  
//   console.log(tinhTong([1, 2, 3, 4])); // 👉 10
  
//! forEach() để duyệt qua mỗi phần tử của mảng thực hiện một hành động nào đó
//* có thể thay đổi trực tiếp mảng ban đầu
// let numbers = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10]
// let tong = 0
// numbers.forEach(function(item, index, arr){
//   tong += arr;
//   numbers[index] = 20
// });
// console.log(numbers)
// console.log(tong)

// let numbers = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10]
// numbers.forEach((item)=>{
//     console.log(item)
// });
// //! every() kiểm tra tất cả các phần tử của một mảng phải thỏa mãn một điều kiện gì đó
// const monHoc = [
//     {
//         ten: "toán",
//         diem: 8.6
//     },
//     {
//         ten: " lý",
//         diem: 9.6,
//     },
//     {
//         ten: "hoa",
//         diem: "8.6"
//     },
// ]

// const hocSinhGioi = monHoc.every((item) =>{
//     return item.diem >= 8;
//     // console.log(item) //* không clg được trong every
// });

// console.log(hocSinhGioi);
// if(hocSinhGioi){
//     console.log("đây là học sinh giỏi");
// }else{
//     console.log("đây không phải học sinh giỏi")
// }

// //! some() kiểm tra chỉ cần 1 phần tử trong mảng thỏa mãn điều kiện trả về true luôn
// const monHoc = [
//     {
//         ten: "toán",
//         diem: 8.6
//     },
//     {
//         ten: " lý",
//         diem: 9.6,
//     },
//     {
//         ten: "hoa",
//         diem: "8.6"
//     },
//     {
//         ten: "sinh",
//         diem: "3"
//     },
// ]

// const oLaiLop = monHoc.some((item) =>{
//     return item.diem < 4;
// });

// console.log(oLaiLop)
// if(oLaiLop){
//     console.log("đúp")
// }else{
//     console.log("ok len lop")
// }

//! find() tìm xem mảng có giá trị nào giống với giá trị cần tìm
// const monHoc = [
//     {
//         ten: "toán",
//         diem: 8.6
//     },
//     {
//         ten: " lý",
//         diem: 9.6,
//     },
//     {
//         ten: "hoa",
//         diem: "8.6"
//     },
//     {
//         ten: "sinh",
//         diem: "3"
//     },
// ]

// const xemDiem = monHoc.find((item) =>{
//     return item.ten == "sinh"
// });

// console.log(xemDiem);
// if(xemDiem){
//     console.log("điểm sinh của bạn là: ", xemDiem.diem)

// }else{
//     console.log("không có môn học!")
// }


//! filter cho phép tìm được nhiều phần tử trả về nhiều phần tử
// const monHoc = [
//     {
//         ten: "toán",
//         diem: 8.6
//     },
//     {
//         ten: " lý",
//         diem: 9.6
//     },
//     {
//         ten: "hoa",
//         diem: 8.6
//     },
//     {
//         ten: "sinh",
//         diem: 3
//     },
//     {
//         ten: "hoa",
//         diem: 4.5
//     },
// ];

// const xemDiem = monHoc.filter((item) => item.ten.trim() === "hoa");

// // Dùng forEach để lấy điểm môn Hóa
// xemDiem.forEach((item, index) => {
//     console.log(`Điểm Hóa ${index + 1}: ${item.diem}`);
// });
// console.log(xemDiem)

//! map() sẽ lặp qua từng phần tử của mảng, trả về một mảng mới
// let numbers = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10]
// numbers.map((item)=>{
//     return item;
// });
// console.log(numbers)

// const monHoc = [
//     {
//         ten: "toán",
//         diem: 8.6
//     },
//     {
//         ten: " lý",
//         diem: 9.6,
//     },
//     {
//         ten: "hoa",
//         diem: "8.6"
//     },
//     {
//         ten: "sinh",
//         diem: "3"
//     },
// ]
// const hocLuc = monHoc.map((item)=>{
//     let resuly = ""
//     if(item.diem >= 8){
//         resuly = "giỏi"
//     }else if(item.diem < 8 && item.diem>= 6.5){
//         resuly = "khá"
//     }else{
//         resuly = "kém"
//     }
//     return {
//         ten: item.ten,
//         hocLuc: resuly
//     }
// });
// console.log(hocLuc)

//! reduce() sẽ duyệt qua từng phần tử trong mảng và tính toán các phần tử đó
const monHoc = [
    {
        ten: "toán",
        diem: 8.6
    },
    {
        ten: " lý",
        diem: 9.6,
    },
    {
        ten: "hoa",
        diem: 8.6
    },
    {
        ten: "sinh",
        diem: 3
    },
]
let tong = monHoc.reduce((total, item)=>{
    return total + item.diem/monHoc.length;
},0);
console.log(tong);
//* 1
// let numbers = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10]
// let tong = numbers.reduce((total, item) =>{
//     console.log(total)
//     return total + item;
// });
// console.log("-----------------");
// console.log(tong);


