# Tổng hợp các hàm và công dụng trong DOM (Document Object Model)

DOM cho phép JavaScript truy cập và thao tác với nội dung, cấu trúc và kiểu dáng của tài liệu HTML. Dưới đây là tổng hợp chi tiết các nhóm hàm và thuộc tính thường dùng.

---

## 1. Truy cập phần tử trong DOM

| Hàm / Thuộc tính | Công dụng |
|------------------|-----------|
| `document.getElementById(id)` | Trả về phần tử có `id` tương ứng |
| `document.getElementsByClassName(class)` | Trả về một HTMLCollection chứa các phần tử có class tương ứng |
| `document.getElementsByTagName(tag)` | Trả về một HTMLCollection chứa các phần tử có tag name tương ứng |
| `document.querySelector(selector)` | Trả về phần tử đầu tiên khớp với CSS selector |
| `document.querySelectorAll(selector)` | Trả về một NodeList chứa tất cả phần tử khớp selector |

---

## 2. Tạo và chỉnh sửa phần tử

| Hàm / Thuộc tính | Công dụng |
|------------------|-----------|
| `document.createElement(tagName)` | Tạo một phần tử HTML mới |
| `element.appendChild(child)` | Thêm một phần tử con vào phần tử cha |
| `element.removeChild(child)` | Xoá phần tử con khỏi cha |
| `element.replaceChild(newChild, oldChild)` | Thay thế một phần tử con cũ bằng phần tử mới |
| `element.innerHTML` | Lấy hoặc gán nội dung HTML bên trong phần tử |
| `element.textContent` | Lấy hoặc gán nội dung text (không HTML) |
| `element.setAttribute(attr, value)` | Gán giá trị cho thuộc tính |
| `element.getAttribute(attr)` | Lấy giá trị của thuộc tính |
| `element.classList.add(className)` | Thêm class vào phần tử |
| `element.classList.remove(className)` | Xoá class khỏi phần tử |
| `element.classList.toggle(className)` | Bật/tắt class (nếu có thì xoá, chưa có thì thêm) |

---

## 3. Lắng nghe và xử lý sự kiện

| Hàm / Thuộc tính | Công dụng |
|------------------|-----------|
| `element.addEventListener(event, callback)` | Đăng ký lắng nghe sự kiện như click, change, input... |
| `element.removeEventListener(event, callback)` | Gỡ bỏ sự kiện đã đăng ký |
| `element.onclick`, `element.onchange`, `element.oninput`... | Gắn sự kiện trực tiếp qua thuộc tính |

**Ví dụ:**
```javascript
button.addEventListener("click", function() {
  alert("Button clicked!");
});
```

---

## 4. Thuộc tính về vị trí và kích thước

| Thuộc tính | Công dụng |
|------------|-----------|
| `element.offsetTop` | Khoảng cách từ phần tử đến phía trên của phần tử cha |
| `element.offsetLeft` | Khoảng cách từ phần tử đến cạnh trái của phần tử cha |
| `element.offsetWidth` | Chiều rộng của phần tử (bao gồm padding + border) |
| `element.offsetHeight` | Chiều cao của phần tử (bao gồm padding + border) |
| `element.clientWidth` | Chiều rộng không bao gồm border |
| `element.scrollTop` | Khoảng cách đã cuộn theo chiều dọc bên trong phần tử |

---

## 5. Tương tác với form

| Hàm / Thuộc tính | Công dụng |
|------------------|-----------|
| `form.elements` | Trả về danh sách các input trong form |
| `input.value` | Lấy/gán giá trị của ô nhập |
| `input.checked` | Kiểm tra checkbox/radio có được chọn không |
| `input.disabled` | Bật/tắt input |

---

## 6. Các thao tác khác trong DOM/JS

| Hàm | Công dụng |
|------|-----------|
| `setTimeout(function, ms)` | Thực hiện một hàm sau khoảng thời gian nhất định |
| `setInterval(function, ms)` | Thực hiện một hàm lặp lại theo khoảng thời gian |
| `clearTimeout(id)` | Huỷ một timeout đã cài |
| `clearInterval(id)` | Huỷ một interval đã cài |
| `window.alert(message)` | Hiển thị thông báo popup |
| `window.confirm(message)` | Hiển thị hộp xác nhận (OK/Cancel) |
| `window.prompt(message)` | Hiển thị hộp nhập liệu |

---

Nếu bạn cần thêm ví dụ cụ thể cho từng nhóm hàm hoặc muốn tài liệu này chuyển sang PDF hoặc HTML trình bày đẹp hơn, hãy báo mình!
