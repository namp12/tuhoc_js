
# 📚 Tổng hợp các phương thức `Array` trong JavaScript từ ES1 đến ES15

---

## ✅ ES1–ES3 (1997–1999) – Các phương thức cơ bản

### `push()` – Thêm phần tử vào cuối mảng
```js
const arr = [1, 2];
arr.push(3); // [1, 2, 3]
```

### `pop()` – Xoá phần tử cuối và trả về nó
```js
const arr = [1, 2, 3];
arr.pop(); // 3 → arr: [1, 2]
```

### `shift()` – Xoá phần tử đầu tiên
```js
const arr = [1, 2, 3];
arr.shift(); // 1 → arr: [2, 3]
```

### `unshift()` – Thêm phần tử vào đầu mảng
```js
const arr = [2, 3];
arr.unshift(1); // [1, 2, 3]
```

### `reverse()` – Đảo ngược mảng
```js
const arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1]
```

### `sort()` – Sắp xếp mảng
```js
const arr = [3, 1, 2];
arr.sort(); // [1, 2, 3]
```

### `splice()` – Thêm/xoá phần tử tại vị trí bất kỳ
```js
const arr = [1, 2, 3];
arr.splice(1, 1, 99); // [1, 99, 3]
```

### `slice()` – Cắt một phần mảng (không thay đổi gốc)
```js
const arr = [1, 2, 3];
arr.slice(0, 2); // [1, 2]
```

### `join()` – Ghép mảng thành chuỗi
```js
const arr = [1, 2, 3];
arr.join('-'); // "1-2-3"
```

### `concat()` – Nối 2 mảng
```js
[1, 2].concat([3, 4]); // [1, 2, 3, 4]
```

---

## ✅ ES5 (2009)

### `forEach()` – Duyệt qua từng phần tử
```js
[1, 2, 3].forEach(x => console.log(x));
```

### `map()` – Tạo mảng mới từ mảng cũ
```js
[1, 2, 3].map(x => x * 2); // [2, 4, 6]
```

### `filter()` – Lọc phần tử thỏa điều kiện
```js
[1, 2, 3].filter(x => x > 1); // [2, 3]
```

### `some()` – Kiểm tra có ít nhất 1 phần tử đúng
```js
[1, 2, 3].some(x => x > 2); // true
```

### `every()` – Kiểm tra tất cả phần tử đúng
```js
[1, 2, 3].every(x => x > 0); // true
```

### `indexOf()` – Vị trí đầu tiên phần tử
```js
[1, 2, 3].indexOf(2); // 1
```

### `lastIndexOf()` – Vị trí cuối cùng phần tử
```js
[1, 2, 3, 2].lastIndexOf(2); // 3
```

### `reduce()` – Tính toán giá trị duy nhất
```js
[1, 2, 3].reduce((acc, cur) => acc + cur, 0); // 6
```

### `reduceRight()` – Giống reduce nhưng từ phải sang trái
```js
[1, 2, 3].reduceRight((acc, cur) => acc + cur, 0); // 6
```

---

## ✅ ES6 (2015)

### `find()` – Tìm phần tử đầu tiên thoả điều kiện
```js
[1, 2, 3].find(x => x > 1); // 2
```

### `findIndex()` – Trả về chỉ số phần tử đầu tiên
```js
[1, 2, 3].findIndex(x => x > 1); // 1
```

### `entries()` – Trả iterator key-value
```js
for (const [i, v] of ['a', 'b'].entries()) {
  console.log(i, v); // 0 'a', 1 'b'
}
```

### `keys()` – Trả iterator của index
```js
[...'abc'].keys(); // 0, 1, 2
```

### `values()` – Trả iterator của giá trị
```js
[...'abc'].values(); // 'a', 'b', 'c'
```

---

## ✅ ES7 → ES9 (2016–2018)

### `includes()` – Kiểm tra phần tử tồn tại
```js
[1, 2, 3].includes(2); // true
```

### `flat()` – Làm phẳng mảng 1 cấp
```js
[1, [2, 3], [4]].flat(); // [1, 2, 3, 4]
```

### `flatMap()` – Kết hợp map + flat
```js
[1, 2, 3].flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
```

---

## ✅ ES13 (2022)

### `at()` – Truy cập phần tử theo chỉ số (có thể âm)
```js
[10, 20, 30].at(-1); // 30
```

---

## ✅ ES14 (2023)

### `toSorted()` – Sắp xếp mảng, không thay đổi gốc
```js
const a = [3, 1, 2];
a.toSorted(); // [1, 2, 3]
```

### `toReversed()` – Đảo ngược mảng, không thay đổi gốc
```js
const a = [1, 2, 3];
a.toReversed(); // [3, 2, 1]
```

### `toSpliced()` – Xoá/chèn phần tử, không thay đổi gốc
```js
const a = [1, 2, 3];
a.toSpliced(1, 1, 99); // [1, 99, 3]
```

### `with()` – Thay đổi giá trị tại index, trả mảng mới
```js
const a = [1, 2, 3];
a.with(1, 99); // [1, 99, 3]
```

---

## ✅ ES15 (2024 - Draft)

### `groupBy()` (sắp ra) – Nhóm phần tử theo tiêu chí
```js
// Ví dụ minh hoạ (polyfill)
[
  {type: 'fruit', name: 'apple'},
  {type: 'veg', name: 'carrot'},
  {type: 'fruit', name: 'banana'}
].groupBy(item => item.type);
// => { fruit: [...], veg: [...] }
```
