# 📘 TỔNG HỢP KIẾN THỨC VỀ DOM (Document Object Model)

---

## 🧱 1. DOM là gì?

* **DOM** là **mô hình cây** (Tree) đại diện cho **cấu trúc HTML** của trang web.
* Mỗi phần tử HTML là **1 nút (node)** trong cây DOM.
* Dùng DOM để **truy cập và thay đổi** nội dung, cấu trúc, hoặc kiểu dáng (CSS) của trang web.

---

## 🔍 2. Truy cập phần tử trong DOM

### Theo `id`:

```js
let title = document.getElementById("title");
```

### Theo `class`:

```js
let items = document.getElementsByClassName("item");
```

### Theo thẻ:

```js
let divs = document.getElementsByTagName("div");
```

### CSS selector (querySelector):

```js
let firstItem = document.querySelector(".item");
let allItems = document.querySelectorAll(".item");
```

---

## 💾 3. Thao tác nội dung

### Thay đổi nội dung:

```js
element.innerHTML = "<b>Hello</b>";
element.textContent = "Hello";
```

### Thuộc tính:

```js
element.setAttribute("href", "https://example.com");
element.getAttribute("href");
element.removeAttribute("disabled");
```

### CSS style:

```js
element.style.color = "red";
element.style.backgroundColor = "yellow";
```

---

## 🎯 4. Tạo, chèn, xóa phần tử

### Tạo:

```js
let newDiv = document.createElement("div");
newDiv.textContent = "Hello World!";
```

### Chèn:

```js
document.body.appendChild(newDiv);
parent.appendChild(child);
```

### Xóa:

```js
element.remove();
```

---

## 🎮 5. Xử lý sự kiện

### Cách 1:

```html
<button onclick="sayHello()">Click me</button>
```

### Cách 2:

```js
btn.onclick = function() {
  alert("Clicked!");
};
```

### Cách 3 - addEventListener:

```js
btn.addEventListener("click", () => {
  alert("Clicked!");
});
```

### Sự kiện phổ biến:

* `click`, `mouseover`, `keydown`, `submit`, `input`, `change`, `DOMContentLoaded`

---

## 🔀 6. Duyệt danh sách phần tử

```js
document.querySelectorAll(".item").forEach((el, index) => {
  el.textContent = `Item ${index + 1}`;
});
```

---

## 🧰 7. DOM nâng cao

### ClassList:

```js
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("show");
element.classList.contains("selected");
```

---

## 🧐 8. Ví dụ đơn giản

```html
<input id="name" />
<button id="show">Hiển thị</button>
<div id="output"></div>
```

```js
document.getElementById("show").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  document.getElementById("output").textContent = `Chào ${name}`;
});
```

---

## ✅ Tổng kết

| Tính năng        | Phương thức / Thuộc tính                   |
| ---------------- | ------------------------------------------ |
| Truy cập phần tử | `getElementById`, `querySelector`, ...     |
| Đọc/ghi nội dung | `innerHTML`, `textContent`                 |
| Xử lý sự kiện    | `addEventListener("click", callback)`      |
| Tạo/chèn/xóa     | `createElement`, `appendChild`, `remove()` |
| Quản lý class    | `classList.add/remove/toggle/contains`     |
