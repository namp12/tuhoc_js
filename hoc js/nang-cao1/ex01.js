//! scope (1: phạm vi biến toàn cục ở đâu cũng sử dụng đc) (2: biến cục bộ)
// var a = 10;

// function test(){
// 	console.log(a);

// 	function test2(){
// 		console.log(a);
// 		test2();
// 	}
// }
// test();

// function test(){
// 	const a = 10;
// 	console.log(a);

// 	function test2(){
// 		console.log(a);
// 	}
// 	test2();
// }
// test();
// console.log(a);


//! tính hosting nghĩa là có thể sử dụng 1 biến sau đó mới cần khai báo biến đô
//! js tự động di chuyển các biến lên đầu

//! hàm trong hosting

// let a = 10;
// let b = 20;
// let c = sum(a, b);
// console.log(c);

// function sum(x, y){
// 	return (x + y);
// }
// console.log(sum);

//! strict mode: là chế độ nghiêm ngặt của js
// "use strict";
// var a = 1;
// var a = 1;
// console.log(a + a);

//! từ khóa this trong js
//* this sẽ trỏ về đối tượng mà nó đang thuộc về
// console.log(window.location.href);
// console.log(this.location.href);

//* this trong object, this trỏ về oblect 
// const hello = {
// 	name: "phuong nam",
// 	sayHi() {
// 		console.log("hi, tôi tên là " + this.name);
// 	}
// };

// hello.sayHi();

//* this trong function bình thường
// "use strict"
// function show(){
// 	console.log(this);
// }
// show(); //* => undefined
//* trong strict mode, this trong hàm thường sẽ là undefuned. ( nếu không có strict mode this trỏ về window trong trình duyệt)

//* this tỏng arrow function 
// const person = {
// 	name: "phuong nam",
// 	sayhi: () =>{
// 		console.log("hi, tôi tên là" + this.name);
// 	}
// };

// person.sayhi();

//* this trong các sự kiện js, this là đối tượng html được gán sự kiện đó.

// const button = document.querySelector("#button");
// button.addEventListener("click", function(){
// 	console.log(this);
// });

// const listenItem = document.querySelectorAll("#menu li");
// console.log(listenItem);
// [...listenItem].forEach(function(item){
// 	item.addEventListener("click", function(){
// 		console.log(this);
// 	});
// });


//* this trong object : lấy đối tượng trước dấu chấm
// let info = {
// 	fullName: "đặng phương nam",
// 	age: 18,
// 	email: "nnam38789@gmail.com",
// 	getFullName: function(){
// 		console.log(this.fullName);
// 	},
// 	cccd: {
// 		fullName: "Nguyễn Thế phương nam",
// 		address: "số 123, đường abc",
// 		getInfoCCCD: function(){
// 			console.log(this.fullName);
// 		}
// 	}
// };
// info.cccd.getInfoCCCD();
// info.getFullName();



//! MODULES là một file js bình thường chỉ dơn giản là file đó sẽ đặt một cái tên có ý nghĩa



