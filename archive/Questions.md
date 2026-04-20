# 🧩 JavaScript Q&A

## **Q1. What’s the difference between `undefined` and `null`?**

| Value           | Meaning                                                  | Assigned by       |
| --------------- | -------------------------------------------------------- | ----------------- |
| **`undefined`** | The variable exists but **hasn’t been assigned** a value | JavaScript engine |
| **`null`**      | The variable was **intentionally set** to “no value”     | Developer         |

**Intuitive analogy:**

> `undefined` → “There’s a box, but nothing’s ever been put in it.”
> `null` → “There’s a box, and I put in a note saying: *this is empty on purpose*.”

Or more poetically:

> `null` is a **pointer to nothing**,
> `undefined` is **nothing at all**.

---

## **Q2. Why does `typeof null` return `"object"`?**

* In the very first JavaScript implementation (1995), values were tagged with binary type markers.
* Object references used the tag `0x00`.
* `null` — representing a null pointer — *also* used `0x00`.
* `typeof` simply checked this tag, and `"object"` was returned for both.

This was later **standardized for backward compatibility** — fixing it would break tons of existing code.

**Correct way to check for `null`:**

```js
if (value === null) { ... }
```

---

## **Q3. How did `undefined` evolve historically?**

### 1. Early JavaScript (1995–1999)

* `undefined` **was not a keyword**, just a **global variable**.

* You could **overwrite it** like any other variable:

  ```js
  var undefined = "oops!";
  console.log(undefined); // "oops!"
  console.log(void 0);    // undefined (safe alternative)
  ```

* Developers used `void 0` to safely get the true `undefined` value.

---

### 2. ECMAScript 3 (1999)

* `undefined` became a **global property** of the global object (`window.undefined`).
* Still **writable** and **configurable**, so reassignments were legal (though discouraged).

---

### 3. ECMAScript 5 (2009)

* In **strict mode**, `undefined` became **read-only**.

  ```js
  "use strict";
  undefined = 123; // ❌ TypeError
  ```
* Finally made consistent and immutable — no more accidental overwrites.

---

### 4. Modern JavaScript (ES6 → Today)

* `undefined` is now a **primitive value**, not a global property lookup result.
* The engine automatically assigns it:

  * When a variable is declared but not initialized.
  * When a function doesn’t return anything.
  * When a missing property is accessed.

```js
let x;
console.log(x); // undefined
```

-> You never need to manually assign `undefined`.
Just omit the assignment — the engine does it for you.

---

## **Q4. Why “pointer to nothing”?**

Historically, `null` comes from **C** and **Java**, where it literally meant:

> a *null pointer* — a memory address that points to nothing.

JavaScript doesn’t use pointers, but it adopted `null` to symbolize the **intentional absence of an object reference**.
So in JavaScript, “pointer to nothing” is **conceptual**, not literal.

---

## **Q5. What is Scheme?**

**Scheme** is a minimalist, **functional** programming language — a dialect of **Lisp** created in the 1970s at MIT.

**Influence on JavaScript:**

* **First-class functions** (functions as values)
* **Closures** (functions remember their scope)
* The concept of *uninitialized variables* → inspired `undefined`

**Example in Scheme:**

```scheme
(define square (lambda (x) (* x x)))
(square 5) ; → 25
```

JavaScript inherited Scheme’s *behavioral flexibility* — even though it looks like Java.

---

## **Q6. What is Self?**

**Self** is an **object-oriented** language (1980s, Xerox PARC & Stanford) that introduced **prototype-based inheritance** — the idea that **objects inherit directly from other objects**, not from classes.

**Influence on JavaScript:**

* Prototypes instead of classes
* Dynamic object behavior
* `Object.create`, `__proto__`, and prototype chains

**Example:**

```js
const animal = { speak() { console.log("Hello"); } };
const dog = Object.create(animal);
dog.speak(); // "Hello"
```

---

## **Q7. How JavaScript Combines These Ideas**

Brendan Eich designed JavaScript in **just 10 days (1995)**, blending three paradigms:

| Source Language | Contributed                         |
| --------------- | ----------------------------------- |
| **Java**        | Syntax, `null`, primitive types     |
| **Scheme**      | Functions, closures, dynamic typing |
| **Self**        | Prototype-based inheritance         |

➡️ **JavaScript looks like Java, acts like Scheme, and inherits like Self.**

---

## **Q9. When does the difference between `undefined` and `null` actually matter?**

1. **Default parameters:**

   ```js
   function greet(name = "Guest") {
     console.log("Hello " + name);
   }
   greet(undefined); // "Guest"
   greet(null);      // Hello null
   ```
* `undefined` triggers the default.
* `null` is treated as a real value (overrides default).

2. **JSON serialization:**
   `undefined` is omitted; `null` is preserved.
3. **Strict equality:**
   `undefined === null // false`
4. **Property existence checks:**
   `obj.a` may be `null` (set), or `undefined` (not set).


2. **JSON serialization:**

```js
JSON.stringify({ a: null, b: undefined });
// → '{"a":null}'
```

* `undefined` is **omitted**
* `null` is **preserved**

---

3. **Strict equality:**

```js
undefined === null; // false
undefined == null;  // true  (loose equality)
```

* `==` treats them as loosely equivalent (legacy design).
* Always use `===` for clarity.

---

4. **Property existence checks:**

```js
const obj = { a: null };
console.log(obj.a);      // null (explicitly set)
console.log(obj.b);      // undefined (doesn’t exist)
```

