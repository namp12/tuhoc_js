// console.log(window)
// console.log(window.innerHeight);    //* chiều cao của trình duyệt
// console.log(window.innerWidth);     //* chiều rộng của trình duyệt

//! BOM location
// console.log(window.location); //* lấy url hiện tại
// window.location.href = "https://google.com";  //* chuyển trang (redirect)
// window.location.reload();   //* tải lại trang

// let screenW = window.screen.width; //* lấy chiều cao của màn hình
// let screenH = window.screen.height; //* lấy chiều rộng của màn hình
// console.log(screenH);
// console.log(screenW);

//! BOM history dùng để lưu lại lịch sử vào web
// console.log(window.history)
// history.back(); //* trở lại trang trước đó
// history.forward(); //* trang kế tiếp
// history.length  //* đếm tổng số trang đã lưu trong history
// history.go(//number) //* đi tới một trang
//* nếu number âm: thì từ trang hiện tại trừ đi number
//* nếu number dương: thì từ trang hiện tại cộng với number

//! BOM navigator được dùng để kiểm tra các thông tin về người dùng 
// window.navigator();
// navigator.cookieEnabled; //* kiểm tra người dùng có bật cooki hay không
// navigator.appName;       //* kiểm tra người dùng dùng app gì
// navigator.appVersion;    //* kiểm tra verson của người dùng
// navigator.platform;      //* xem hệ điều hành mà người dùng đang sử dụng
// navigator.language;      //* kiểm tra ngôn ngữ của trình duyệt

//! cookies

