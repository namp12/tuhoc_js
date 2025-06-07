# String Properties in JavaScript (ES1 to ES15)

## ES1

### String.length
```js
console.log(String.length); // 1
```

### String.prototype.length
```js
let str = 'hello';
console.log(str.length); // 5
```

### String.prototype.charAt()
```js
let str = 'hello';
console.log(str.charAt(1)); // 'e'
```

### String.prototype.charCodeAt()
```js
let str = 'hello';
console.log(str.charCodeAt(1)); // 101
```

### String.prototype.concat()
```js
let str1 = 'hello';
let str2 = ' world';
console.log(str1.concat(str2)); // 'hello world'
```

### String.prototype.indexOf()
```js
let str = 'hello';
console.log(str.indexOf('l')); // 2
```

### String.prototype.lastIndexOf()
```js
let str = 'hello';
console.log(str.lastIndexOf('l')); // 3
```

### String.prototype.slice()
```js
let str = 'hello';
console.log(str.slice(1, 3)); // 'el'
```

### String.prototype.substr()
```js
let str = 'hello';
console.log(str.substr(1, 2)); // 'el'
```

### String.prototype.substring()
```js
let str = 'hello';
console.log(str.substring(1, 3)); // 'el'
```

### String.prototype.toLowerCase()
```js
let str = 'HELLO';
console.log(str.toLowerCase()); // 'hello'
```

### String.prototype.toUpperCase()
```js
let str = 'hello';
console.log(str.toUpperCase()); // 'HELLO'
```

## ES3

### String.prototype.match()
```js
let str = 'hello';
console.log(str.match(/l/g)); // ['l', 'l']
```

### String.prototype.replace()
```js
let str = 'hello';
console.log(str.replace('l', 'L')); // 'heLlo'
```

### String.prototype.search()
```js
let str = 'hello';
console.log(str.search(/l/)); // 2
```

### String.prototype.split()
```js
let str = 'hello';
console.log(str.split('')); // ['h', 'e', 'l', 'l', 'o']
```

## ES5

### String.prototype.trim()
```js
let str = '  hello  ';
console.log(str.trim()); // 'hello'
```

# Hướng dẫn làm sạch và thay đổi chuỗi trong JavaScript

## 1. Làm sạch chuỗi (Clean a string)

| Việc cần làm               | Cách làm                                    |
|---------------------------|-------------------------------------------|
| Xoá khoảng trắng 2 đầu     | `str.trim()`                              |
| Xoá **mọi khoảng trắng**     | `str.replace(/\s/g, '')`                  |
| Xoá ký tự đặc biệt        | `str.replace(/[^\w\s]/gi, '')`            |
| Xoá dấu câu                 | `str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')` |
| Viết thường toàn bộ         | `str.toLowerCase()`                       |
| Viết hoa toàn bộ             | `str.toUpperCase()`                       |

### Ví dụ:
```javascript
let raw = "   Hello, World!!   ";
let clean = raw.trim().replace(/[^\w\s]/g, '').toLowerCase();
console.log(clean); // "hello world"
```

---

## 2. Thay đổi chuỗi (Modify string)

| Mục tiêu                 | Cách làm |
|------------------------------|----------|
| Thay đổi một từ        | `str.replace("cũ", "mới")` |
| Thay nhiều từ         | `str.replace(/cũ/g, "mới")` |
| Chèn vào giữa chuỗi     | Dùng `slice()` + nối chuỗi |
| Tách chuỗi thành mảng   | `str.split(" ")` |
| Ghép mảng thành chuỗi    | `arr.join(" ")` |

### Ví dụ:
```javascript
let str = "Tôi thích Java.";
let newStr = str.replace("Java", "JavaScript");
console.log(newStr); // "Tôi thích JavaScript."

let str2 = "HelloWorld";
let insert = str2.slice(0, 5) + " " + str2.slice(5);
console.log(insert); // "Hello World"
```

---

> Nếu bạn có chuỗi cụ thể, hãy thay vào và test trực tiếp!