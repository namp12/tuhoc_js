
# 🧾 TOÀN TẬP CÁC THAO TÁC TRONG JAVASCRIPT

## 💡 Phân loại theo chủ đề:
DOM, Event, Storage, AJAX/API, Timer, Location, History, Navigator,...

---

## 📦 1. Thao tác DOM (Document Object Model)

### 🔍 Truy cập phần tử:
```js
document.getElementById("id");
document.getElementsByClassName("class");
document.getElementsByTagName("div");
document.querySelector(".class");
document.querySelectorAll("p");
```

### 🎯 Thay đổi nội dung / thuộc tính:
```js
element.textContent = "Hello";
element.innerHTML = "<b>Bold</b>";
element.setAttribute("href", "https://...");

element.style.color = "red";
element.classList.add("active");
element.classList.remove("hide");
```

### 🔧 Thêm / xoá phần tử:
```js
let el = document.createElement("div");
el.textContent = "New";
document.body.appendChild(el);
element.remove();
```

---

## 🖱️ 2. Event – Xử lý sự kiện

### Thêm sự kiện:
```js
element.addEventListener("click", function(e) {
  console.log("Clicked", e.target);
});

element.onclick = () => console.log("Clicked");
```

### Một số sự kiện phổ biến:
| Sự kiện     | Mô tả                          |
|-------------|-------------------------------|
| click       | Nhấn chuột                    |
| input       | Nhập liệu thay đổi            |
| change      | Thay đổi (select, checkbox)   |
| submit      | Gửi form                      |
| keydown     | Nhấn phím                     |
| mousemove   | Di chuyển chuột               |

---

## ⏱️ 3. Timer – Hẹn giờ

```js
setTimeout(() => console.log("1s trôi qua"), 1000); // chạy 1 lần

let intervalId = setInterval(() => console.log("lặp"), 500); // lặp liên tục

clearInterval(intervalId); // dừng lặp
```

---

## 💾 4. localStorage / sessionStorage

```js
localStorage.setItem("key", "value");
let val = localStorage.getItem("key");
localStorage.removeItem("key");
localStorage.clear(); // xoá toàn bộ
```

📌 **Ghi chú:** `localStorage` giữ dữ liệu sau khi tải lại trang. `sessionStorage` chỉ giữ trong 1 phiên (tab).

---

## 🌐 5. Fetch API / AJAX

### Dùng Promise:
```js
fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Dùng async/await:
```js
async function getData() {
  try {
    let res = await fetch("https://api.example.com/data");
    let data = await res.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}
```

---

## 📍 6. Thao tác URL / Location

```js
window.location.href;        // lấy URL hiện tại
window.location.reload();    // reload trang
window.location.assign("https://..."); // chuyển trang
```

---

## 🧭 7. History API – Điều hướng lịch sử

```js
history.back();     // quay lại
history.forward();  // tiến tới
history.go(-1);     // quay lại 1 trang
```

---

## 📡 8. Navigator – Thông tin trình duyệt

```js
navigator.userAgent; // chuỗi thông tin trình duyệt

navigator.geolocation.getCurrentPosition(pos => {
  console.log(pos.coords.latitude, pos.coords.longitude);
});
```

---

## 🧪 9. Form Validation thủ công

```js
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // chặn reload
  let name = document.querySelector("#name").value;
  if (name === "") {
    alert("Vui lòng nhập tên");
  }
});
```

---

## 🧰 10. Các thao tác khác

### 🌐 Clipboard – Copy/Paste
```js
navigator.clipboard.writeText("Sao chép nè");
```

### 📸 Screenshot, Media, Camera
```js
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    // hiển thị camera hoặc xử lý stream
  });
```

---

## ✅ TÓM TẮT NHÓM CÚ PHÁP

| Chủ đề       | Cú pháp tiêu biểu                         |
|--------------|--------------------------------------------|
| DOM          | getElementById, querySelector, innerHTML   |
| Event        | addEventListener("click", fn)              |
| Storage      | localStorage.setItem/getItem               |
| API / Fetch  | fetch().then(...).catch(...)               |
| Timer        | setTimeout, setInterval                    |
| Location     | window.location.href                       |
| History      | history.back()                             |
| Navigator    | navigator.userAgent, geolocation           |
| Clipboard    | navigator.clipboard.writeText()            |
