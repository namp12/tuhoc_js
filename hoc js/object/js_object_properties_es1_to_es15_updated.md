# Object Properties in JavaScript (ES1 to ES15)

## ES1

### Object.prototype.constructor => Trả về hàm constructor đã tạo ra đối tượng đó.
```js
let obj = {};
console.log(obj.constructor === Object); // true
```

### Object.prototype.hasOwnProperty() => Kiểm tra xem thuộc tính có phải của chính đối tượng (không phải từ prototype) hay không.
```js
let obj = {a: 1};
console.log(obj.hasOwnProperty('a')); // true
```

### Object.prototype.isPrototypeOf()
// Kiểm tra xem một đối tượng có nằm trong chuỗi prototype của một đối tượng khác không.
```js
function Person() {}
let p = new Person();
console.log(Person.prototype.isPrototypeOf(p)); // true
```

### Object.prototype.propertyIsEnumerable()
// Kiểm tra xem một thuộc tính có thể duyệt được bằng vòng lặp for...in hay không.
```js
let obj = {a: 1};
console.log(obj.propertyIsEnumerable('a')); // true
```

### Object.prototype.toLocaleString()
// Trả về chuỗi biểu diễn đối tượng, có thể được định dạng theo ngôn ngữ.
```js
let obj = {name: 'John'};
console.log(obj.toLocaleString()); // '[object Object]'
```

### Object.prototype.toString()
// Trả về chuỗi biểu diễn đối tượng mặc định.
```js
let obj = {};
console.log(obj.toString()); // '[object Object]'
```

### Object.prototype.valueOf()
// Trả về giá trị nguyên thủy của đối tượng.
```js
let obj = {a: 1};
console.log(obj.valueOf()); // {a: 1}
```

## ES5

### Object.create()
// Tạo một đối tượng mới với prototype được chỉ định.
```js
let proto = {greet: 'hi'};
let obj = Object.create(proto);
console.log(obj.greet); // 'hi'
```

### Object.defineProperty()
// Khai báo hoặc sửa một thuộc tính cụ thể trên một đối tượng.
```js
let obj = {};
Object.defineProperty(obj, 'a', {value: 10});
console.log(obj.a); // 10
```

### Object.defineProperties()
// Khai báo nhiều thuộc tính cùng lúc trên một đối tượng.
```js
let obj = {};
Object.defineProperties(obj, {a: {value: 1}, b: {value: 2}});
console.log(obj.a, obj.b); // 1 2
```

### Object.getOwnPropertyDescriptor()
// Trả về mô tả chi tiết của một thuộc tính.
```js
let obj = {a: 1};
console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
// { value: 1, writable: true, enumerable: true, configurable: true }
```

### Object.getOwnPropertyNames()
// Trả về mảng chứa tên tất cả thuộc tính (kể cả không enumerable).
```js
let obj = {a: 1};
console.log(Object.getOwnPropertyNames(obj)); // ['a']
```

### Object.keys()
// Trả về mảng chứa tên các thuộc tính enumerable.
```js
let obj = {a: 1, b: 2};
console.log(Object.keys(obj)); // ['a', 'b']
```

### Object.preventExtensions()
// Ngăn không cho thêm thuộc tính mới vào đối tượng.
```js
let obj = {};
Object.preventExtensions(obj);
obj.a = 1;
console.log(obj.a); // undefined
```

### Object.isExtensible()
// Kiểm tra xem đối tượng có cho phép thêm thuộc tính mới không.
```js
let obj = {};
console.log(Object.isExtensible(obj)); // true
```

### Object.seal()
// Ngăn không cho thêm/xóa thuộc tính, nhưng vẫn có thể chỉnh sửa giá trị.
```js
let obj = {a: 1};
Object.seal(obj);
obj.b = 2;
console.log(obj.b); // undefined
```

### Object.isSealed()
// Kiểm tra xem một đối tượng có bị seal hay chưa.
```js
let obj = {};
Object.seal(obj);
console.log(Object.isSealed(obj)); // true
```

### Object.freeze()
// Đóng băng đối tượng: không thêm/xóa/sửa được thuộc tính.
```js
let obj = {a: 1};
Object.freeze(obj);
obj.a = 2;
console.log(obj.a); // 1
```

### Object.isFrozen()
// Kiểm tra xem một đối tượng có bị đóng băng không.
```js
let obj = {};
Object.freeze(obj);
console.log(Object.isFrozen(obj)); // true
```

## ES6

### Object.assign()
// Sao chép các thuộc tính enumerable từ đối tượng nguồn vào đối tượng đích.
```js
let target = {a: 1};
let source = {b: 2};
Object.assign(target, source);
console.log(target); // {a: 1, b: 2}
```

### Object.is()
// So sánh hai giá trị một cách nghiêm ngặt (giống === nhưng chính xác hơn với NaN và -0).
```js
console.log(Object.is(25, 25)); // true
```

### Object.setPrototypeOf()
// Thiết lập prototype cho một đối tượng.
```js
let obj = {};
let proto = {greet: 'hi'};
Object.setPrototypeOf(obj, proto);
console.log(obj.greet); // 'hi'
```

### Object.getPrototypeOf()
// Trả về prototype của đối tượng đã cho.
```js
let obj = {};
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
```

## ES8

### Object.values()
// Trả về mảng các giá trị enumerable của đối tượng.
```js
let obj = {a: 1, b: 2};
console.log(Object.values(obj)); // [1, 2]
```

### Object.entries()
// Trả về mảng các cặp [key, value] enumerable.
```js
let obj = {a: 1, b: 2};
console.log(Object.entries(obj)); // [['a', 1], ['b', 2]]
```

### Object.getOwnPropertyDescriptors()
// Trả về tất cả mô tả thuộc tính (descriptor) của một đối tượng.
```js
let obj = {a: 1};
console.log(Object.getOwnPropertyDescriptors(obj));
// {a: {value: 1, writable: true, enumerable: true, configurable: true}}
```

## ES10

### Object.fromEntries()
// Chuyển mảng các cặp [key, value] thành một đối tượng.
```js
let entries = [['a', 1], ['b', 2]];
console.log(Object.fromEntries(entries)); // {a: 1, b: 2}
```

