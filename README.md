## 1. What is the difference between `var`, `let`, and `const`?

### var
`var` is the old way to declare variables in JavaScript. It has **function scope**. If it is declared outside a function, it becomes **global scope**. Variables declared with `var` are added to the **window object**. A variable declared with `var` can be **redeclared** using `var`.

### let
`let` was introduced in **ES6**. It has **block scope**, which means it only works inside `{ }`. If two variables with the same name are declared using `let` inside different blocks, they are treated as separate variables. A variable declared with `let` **cannot be redeclared**, but its **value can be changed**.

### const
`const` was also introduced in **ES6** and it has **block scope**. When declaring a variable with `const`, a value **must be assigned immediately**, otherwise it will produce an error. After declaration, the **value cannot be changed**.

---

## 2. What is the spread operator (`...`)?

The **spread operator (`...`)** is used to expand elements of an **array or object**. It is commonly used to **copy arrays/objects** or **merge multiple arrays/objects**.

### Example (Array)

```javascript
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

console.log(arr2);
```

Output:

```
[1, 2, 3, 4]
```

### Example (Object)

```javascript
const user = { name: "sobuj" };
const newUser = { ...user, age: 22 };

console.log(newUser);
```

Output:

```
{ name: "sobuj", age: 22 }
```

---

## 3. Difference between `map()`, `filter()`, and `forEach()`

### map()
`map()` works on every element of an array and **returns a new array**.

```javascript
const numbers = [1, 2, 3, 4];

const double = numbers.map(n => n * 2);

console.log(double);
```

Output:

```
[2, 4, 6, 8]
```

---

### filter()
`filter()` returns a **new array containing elements that match a condition**.

```javascript
const even = numbers.filter(n => n % 2 === 0);

console.log(even);
```

Output:

```
[2, 4]
```

---

### forEach()
`forEach()` simply loops through the array but **does not return anything**.

```javascript
numbers.forEach(n => console.log(n));
```

Output:

```
1
2
3
4
```

---

## 4. What is an Arrow Function?

An **Arrow Function** was introduced in **ES6**. It is a shorter and cleaner syntax for writing functions.

### Normal Function

```javascript
function add(a, b) {
  return a + b;
}
```

### Arrow Function

```javascript
const add = (a, b) => {
  return a + b;
};
```

---

## 5. What are Template Literals?

**Template literals** allow you to easily use variables inside strings and write **multi-line strings**. They use **backticks (` `)** instead of quotes.

### Example

```javascript
const name = "sobuj";
const age = 22;

console.log(`My name is ${name} and I am ${age} years old`);
```

Output:

```
My name is sobuj and I am 22 years old
```
