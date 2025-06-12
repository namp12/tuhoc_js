//* callback một hàm được truyền dưới dạng đối số của một hàm khác
function ham1(callback){
	console.log("hàm 1");
	// console.log(callback);
	callback();
}

function ham2(){
	console.log("hàm 2");
}

//* gọi dạng thường
// ham1();
// ham2();

//* gọi dạng callbacks
ham1(ham2);