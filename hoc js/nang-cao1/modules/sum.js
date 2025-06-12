function sum(a, b){
	return a + b;
}

function hieu (a, b){
	return a - b;
}

function nhan (a, b){
	return a * b;
}

function chia (a, b){
	return a / b;
}

export default function thongbao (){
	console.log("thông báo");
}
export {sum as to, hieu as hi, nhan as na, chia as ch}; //* viết rút gọn