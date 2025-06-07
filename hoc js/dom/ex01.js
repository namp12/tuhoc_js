//! dom element
//* getElementById 
// const box = document.getElementById("box");
// box.classList.add("dark"); //* thêm class = classList.add
// console.log(box);

// const menu = document.getElementById("menu");
// console.log(menu);

//* getelementByTagName để tìm theo tên thẻ html, trả về 1 mảng
// const pnam = document.getElementsByTagName("h2");
// console.log(pnam);
// console.log(pnam[3]);

//* getElementByClassName("className");
// const tag_class = document.getElementsByClassName("tag");
// [...tag_class].forEach(item => {
// 	item.classList.add("tag_2");
// 	item.classList.remove("tag");
// });

// console.log(tag_class);

//* sử dụng selector của css
// const active = document.querySelector(".box_1 .box_2 h2 .link"); //* chỉ tìm được một thẻ nào đó
// active.classList.add("active");
// console.log(active);

// const active_2 = document.querySelectorAll(".box_1 .box_2 h2 .link"); //* có thể tìm được nhiều class
// active_2.forEach(item =>{
// 	item.classList.add("active");
// });
// console.log(active_2)

//! DOM HTML
const h2 = document.querySelector("h2");
// const contentH2 = h2.innerHTML;	//* lấy nội dung thẻ mà mình cần
// const contentH2 = h2.textContent; 	//* textcontent chỉ lấy text trong các thẻ
// const contentH2 = h2.innerText; 	//* loại bỏ khoảng trắng
// h2.innerHTML = "test";
// console.log(contentH2);   //* thay đổi nội dung 

// const box = document.querySelector("#box");
// box.innerHTML = contentH2;	//* lấy nội dung thẻ này gán thẻ khác


//! thay đổi thuộc tính thẻ html
// const productList = document.querySelectorAll(".product_item");

// let cart = [];
// console.log(productList);
// [...productList].forEach(item =>{
// 	const dataId = item.getAttribute("data-id"); //* getAttribute để lấy giá trị của một thuộc tính
// 	cart.push(dataId)

// 	item.setAttribute("data-category", "234");		//* setAttribute dùng để thay đổi các giá trị của một thuộc tính
// 	item.setAttribute("class", "product_item phuong-nam");
// });
// console.log(cart);


//! DOM CSS
// const h3 = document.querySelector("h3");
// h3.style.color = "red";
// h3.style.backgroundColor = "yellow";

//! DOM EVENT
// const menu = document.querySelector("#menu");
// console.log(menu);

// const inputName = document.querySelector("#input-name");
// inputName.onblur = function(){
// 	inputName.value = inputName.value.toUpperCase();
// 	// inputName
// }

// inputName.onfocus = function(){
// 	inputName.classList.add("fucus");
// }

//* onkeydown and onkeyup
// const inputName = document.querySelector("#input-name");
// // inputName.onkeydown = function(){
// // 	console.log("onkeydown");
// // }

// inputName.onkeyup = function(){
// 	console.log("onkeyup");
// 	alert("bạn có chắc");
// }


//! onclick

// const buttonMenu = document.querySelector("#buttonMenu");
// const buttonclose = document.querySelector("#button-close");
// const menu = document.querySelector("#menu");

// buttonMenu.onclick = function(){
// 	menu.classList.add("show");
// };

// buttonclose.onclick = function(){
// 	menu.classList.remove("show");
// }


//! onchange

// const colors = document.querySelector("#color");

// colors.onchange = function(){
// 	let currentcolor = colors.value;
// 	console.log(currentcolor);
// }

// const inputName = document.querySelector("#input-name");
// inputName.onchange = function(){
// 	console.log(inputName.value);
// 	// inputName
// }


//! dom events listener
// function hamMot(){
// 	console.log("việc 1");
// }

// function hamHai(){
// 	console.log("việc 2");
// }

// const button = document.querySelector("button");
// // button.onclick = function(){
// // 	hamMot();
// // }
// button.addEventListener("click", hamMot);
// button.addEventListener("click", hamHai);

// setTimeout(() =>{
// 	button.removeEventListener("click", hamHai);
// }, 5000);

//! DOM NAVIGATION

// const childone = document.querySelector("#child-1");
// console.log(childone);
// console.log(childone.parentNode);  //* lấy ra thẻ cha 
// console.log(childone.childNodes);	//* lấy ra các thuộc tính con trả về một mảng
// // console.log(childone.querySelectorAll(".box"));
// console.log(childone.firstElementChild);
// console.log(childone.lastElementChild);
// console.log(childone.nextElementSibling);
// console.log(childone.nodeName);
// const parent = document.querySelector(".parent");
// console.log(parent.querySelector(".box"));


//! DOM NODES
// const div = document.createElement("div");  //* createElement để tạo một element mới
// div.innerHTML = "quảng cáo....";	
// console.log("div");

// setInterval(() =>{
// 	const divads = document.querySelector("#ads");
// 	divads.appendChild(div);
// }, 3000);

// const div = document.createElement("div");
// const text = document.createTextNode("quảng cáo...");  //* tạo node mới hoàn toàn nhưng không ảnh hướng tới website
// div.appendChild(text);
// console.log(div);


//* appendChill() dùng để thêm vào vị trí cuối cùng của đối tươngj
const menu = document.querySelector("#menu");
const buttonadd = document.querySelector("#buttonadd");



buttonadd.onclick = function(){
	const firsaElement = menu.firstElementChild;


	const newitem = document.createElement("li");
	newitem.innerHTML = "Item mới";
	// menu.appendChild(newitem);
	menu.insertBefore(newitem, firsaElement);
	
}

// const listitem = menu.querySelectorAll("li");

// 	listitem.forEach(item => {
// 		console.log(item);
// 		item.onclick = function(){
// 			menu.removeChild(item); //* remove child
// 		}
// 	});

const listitem = menu.querySelectorAll("li");

	listitem.forEach(item => {
		// console.log(item);
		item.onclick = function(){
			const newitem = document.createElement("li");
			newitem.innerHTML = "Item mới";
			menu.replaceChild(newitem, item); //* remove child
		}
	});

//* insertBefore() được dùng để thêm một node vào đăng trước một node con nào đó
