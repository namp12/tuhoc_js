// let infouserjson = `{
// 	"fullName" : "nguyen the phuong nam",
// 	"email" : "nnam38789@gmail.com",
// 	"tuoi" : 19
// }`;
// console.log(infouserjson);

// //* convert sang js
// let infouserjsontojs = JSON.parse(infouserjson); //* dùng parse để convert để đổi từ json về js
// console.log(infouserjsontojs);
// console.log(infouserjsontojs.fullName);  //* lấy key ra như bình thường

// let infouserjson = {
// 	"fullName" : "nguyen the phuong nam",
// 	"email" : "nnam38789@gmail.com",
// 	"tuoi" : 19
// };

// //* convert từ js sang json để gửi về sever
// let infouserJstoJson = JSON.stringify(infouserjson);  //* dùng thuộc tính stringify để convert
// console.log(infouserJstoJson);

//* json Number
// let jsonNumber = "5";

// console.log(jsonNumber);
// console.log(JSON.parse(jsonNumber));

//* json String
// let jsonString = `"Nguyen the phuong nam"`; //* phải thêm tempale
// console.log(jsonString);
// console.log(JSON.parse(jsonString));


//* json boolean
// let jsonBoolean = `true`;
// console.log(jsonBoolean);
// console.log(JSON.parse(jsonBoolean));

//* json array
// let jsonArray = `
// 	[
// 		{
// 			"id": 1,
// 			"name": "le van a",
// 			 "email": "levana@"
// 		},
// 		{
// 			"id": 2,
// 			"name": "le van b",
// 			 "email": "levanb@"
// 		},
// 		{
// 			"id": 3,
// 			"name": "le van c",
// 			 "email": "levanc@"
// 		}
// 	]
// `;

// let listuser = JSON.parse(jsonArray);

// let htmls = "";
// listuser.forEach(item => {
// 	htmls += `
// 	<div class="user-item">
// 		<div class="inner-name">${item.name}</div>
// 		<div class="inner-email">${item.email}</div>
// 	</div>`
// });

// const divuserlist = document.querySelector(".user-list");
// divuserlist.innerHTML = htmls;
// console.log(htmls);

//* json Null
// let jsonNull = "null";
// console.log(jsonNull);
// console.log(JSON.parse(jsonNull));

