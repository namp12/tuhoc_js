
# Tổng hợp cú pháp `Number` từ ES01 đến ES15

## ✅ Bảng tổng hợp

| **Phiên bản** | **Cú pháp** | **Mô tả** |
|---------------|-------------|-----------|
| ES1           | `Number()` | Ép kiểu dữ liệu về kiểu số |
| ES1           | `parseInt()` | Chuyển chuỗi thành số nguyên |
| ES1           | `parseFloat()` | Chuyển chuỗi thành số thực |
| ES3           | `isNaN()` | Kiểm tra giá trị có phải NaN |
| ES3           | `isFinite()` | Kiểm tra số hữu hạn |
| ES5           | `toFixed()` | Làm tròn số đến số chữ số thập phân cố định |
| ES5           | `toExponential()` | Biểu diễn số dưới dạng số mũ |
| ES5           | `toPrecision()` | Biểu diễn số với độ chính xác cụ thể |
| ES6           | `Number.isNaN()` | Kiểm tra giá trị có phải `NaN` (an toàn hơn `isNaN()`) |
| ES6           | `Number.isFinite()` | Kiểm tra số hữu hạn (an toàn hơn `isFinite()`) |
| ES6           | `Number.isInteger()` | Kiểm tra số nguyên |
| ES6           | `Number.parseInt()` | Bản sao an toàn của `parseInt()` |
| ES6           | `Number.parseFloat()` | Bản sao an toàn của `parseFloat()` |
| ES6           | `Number.EPSILON` | Độ chính xác nhỏ nhất có thể phân biệt được giữa hai số |
| ES6           | `Number.MAX_SAFE_INTEGER` | Số nguyên lớn nhất an toàn |
| ES6           | `Number.MIN_SAFE_INTEGER` | Số nguyên nhỏ nhất an toàn |
| ES6           | `Number.MAX_VALUE` | Giá trị số lớn nhất |
| ES6           | `Number.MIN_VALUE` | Giá trị số nhỏ nhất |
| ES6           | `Number.POSITIVE_INFINITY` | Vô cực dương |
| ES6           | `Number.NEGATIVE_INFINITY` | Vô cực âm |
| ES6           | `Number.NaN` | Giá trị Not-a-Number |

---

## 📌 Ví dụ minh họa

```javascript
// ES1
Number("123"); // 123
parseInt("42px"); // 42
parseFloat("3.14text"); // 3.14

// ES3
isNaN("abc"); // true
isFinite(100); // true

// ES5
let num = 5.6789;
num.toFixed(2);        // "5.68"
num.toExponential(2);  // "5.68e+0"
num.toPrecision(3);    // "5.68"

// ES6
Number.isNaN(NaN); // true
Number.isFinite(10); // true
Number.isInteger(5.0); // true

Number.parseInt("123abc"); // 123
Number.parseFloat("3.14xyz"); // 3.14

Number.EPSILON; // 2.220446049250313e-16
Number.MAX_SAFE_INTEGER; // 9007199254740991
Number.MIN_SAFE_INTEGER; // -9007199254740991

Number.MAX_VALUE; // 1.7976931348623157e+308
Number.MIN_VALUE; // 5e-324

Number.POSITIVE_INFINITY; // Infinity
Number.NEGATIVE_INFINITY; // -Infinity
Number.NaN; // NaN
```
