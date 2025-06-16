// //* callback một hàm được truyền dưới dạng đối số của một hàm khác
// function ham1(callback){
// 	console.log("hàm 1");
// 	console.log(callback);
// 	callback();
// }

// function ham2(){
// 	console.log("hàm 2");
// }

// //* gọi dạng thường
// // ham1();
// // ham2();

// //* gọi dạng callbacks
// ham1(ham2);

//* ví dụ 2:
// function tong(a, b){
// 	let ketqua = a + b;
// 	console.log(ketqua);
// }

// tong(10, 20);

//* ví dụ 3:
//! kiểm tra số dương bình thường
// function kiemtrasoduong(so){
// 	if(so >= 0){
// 		console.log("đây là số dương");
// 	}else{
// 		console.log("đây là số âm")
// 	}
// }

// function kiemtrachanle(so){
// 	if(so % 2 == 0){
// 		console.log("đây là số chẵn");
// 	}else{
// 		console.log("đây là số lẻ")
// 	}
// }

// function tong(a, b){
// 	let ketqua = a + b;
// 	console.log(ketqua);
// 	kiemtrachanle(ketqua);
// 	kiemtrasoduong(ketqua);
// }

// tong(10, 20);

//! kiểm tra số dương bằng hàm callbacks
// function kiemtrachanle(num){
// 	if(num % 2 == 0){
// 		console.log("số này là số dương")
// 	}else{
// 		console.log("số này là số âm")
// 	}
// }

// function kiemtrasoduong(num){
// 	if(num > 0){
// 		console.log("số dương")
// 	}else{
// 		console.log("số âm")
// 	}
// }

// function tong(a, b, callback){
// 	let ketqua = a + b;
// 	callback(ketqua);
// }

// tong(10,20, kiemtrachanle);
// tong(10,11, kiemtrasoduong);

//* callback trong setimeout
// function sayhello(name, callback){
// 	setTimeout(function(){
// 		console.log("xin chào bạn " + name)
// 		callback();
// 	},2000)
// }

// sayhello("nam", function(){
// 	console.log("callback chỉ có thế thôi");
// });


//* callback trong mảng (hàm cao cấp như map, foreach)
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(num){
// 	console.log(num * 2);
// });

//* promise dùng dể giải quyết các vấn đề callback hell.
//! callback hell là có nhiều hàm lồng nhau gây ra khó chịu
//? new Promise: để tạo mới một promise
//? resolve    : là một hàm callback xử lý cho hành động thất bại
//? reject     : là một hàm callback xử lý cho hành động thất bại
//? .them      : nếu thành công nó chạy vào đây
//? .catch     : nếu thất bại chạy vào đây
// ? .finally   : luôn luôn chạy vào đây

// var a = 10;
// var promise = new Promise((resolve, rejiect)=>{
// 	if(a !== undefined && a !== null && a !== ""){
// 		resolve(a);
// 	}else{
// 		rejiect(a);
// 	}
// });

// promise
// 	.then((success) =>{
// 		console.log(success);
// 		return success;
// 	})
// 	.then((success2) =>{
// 		const b = 20;
// 		console.log(success2 + b);
// 		return success2 + b;
// 	})

// 	.then((success3) =>{
// 		const c = 30;
// 		console.log(success3 + c);
// 		return success3 + c;
// 	})

// 	.catch((error) =>{
// 		console.log("lỗi: ", error);
// 	})
// 	.finally(() =>{
// 		console.log("luôn chạy vào đây");
// 	})

//* promise có 3 trạng thái
//? pending. khi promise đang chạy thì trạng thái 
//? fullfilled.khi promise đã chạy xong thì ở trạng thái này
//? rejected. khi promise bị lỗi thì sẽ ở trạng thái này

//* vd2: 
// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() =>{
// 		// resolve();
// 		reject();
// 	}, 3000);
// });
// console.log(promise);

// setTimeout(() =>{
// 	console.log("sau một giây", promise);
// }, 1000);

// setTimeout(() =>{
// 	console.log("sau hai giây", promise);
// }, 2000);

// setTimeout(() =>{
// 	console.log("sau ba giây", promise);
// }, 3000);

//* promise.all giúp cho tất cả các promise thực thi ss nhau
let a = 10;
let b = 20;
let c = 30;
let d = 40;
let e = 50;
let f = 60;

let sum = new Promise((resolve, reject) =>{
	setTimeout(() =>{
		resolve(a + b);
	}, 2000);
});

let sum1 = new Promise((resolve, reject) =>{
	setTimeout(() =>{
		resolve(c + d);
	}, 4000);
});

let sum2 = new Promise((resolve, reject) =>{
	setTimeout(() =>{
		resolve(e + f);
	}, 6000);
});

Promise.all([sum, sum1, sum2])
	.then(([sum, sum1, sum2]) =>{
		let result = sum1 + sum2 + sum;
		console.log(result);
	})
	.catch((error) =>{
		console.log("error");
	})
	.finally(() =>{
		console.log("luôn vào đây");
	})