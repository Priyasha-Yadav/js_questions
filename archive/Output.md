```js
let total = 0;
for (let i = 1; i <= 0; i++) {
    total += i;
}

console.log(total) // 0
```

```js
let total = 0;
for (let i = 1; i <= 5; i++) {
    total += i;
}

console.log(total) // 15
```

```js
const nums = [1, 2, 3];
const x = nums.map(n => n * 2 + 5);

console.log(x); // [ 7, 9, 11 ]
```

```js
console.log('A');
setTimeout(() => console.log('B'), 0);

console.log('C');

// A 
// C 
// B
```

```js
const arr = [10, 5, 15, 20];
console.log(arr.filter(x => x > 10 && x % 2 === 0)); // [20]
```

```js
const result = [1, 2, 3, 4, 5].reduce((a, b) => a / b, 0);
console.log(result); // 0.008333333333333333
console.log(1 / 120); // 0.008333333333333333
```

```js
const array = [1, 2, 3, 4];
const sumWithInitial = array.reduce((accumulator, currentValue) => accumulator / currentValue, 0);
console.log(sumWithInitial); // 0
```


```js
const array = [1, 2, 3, 4];
const sumWithInitial = array.reduce((accumulator, currentValue) => currentValue % accumulator, 0);
console.log(sumWithInitial); // 0
```


```js
const person ={name : "priyasha", age :20};
const {a} = person;
const {age} = person;
console.log(a);
console.log(age);
```

```js
const array = [1, 2, 3, 4];
const sumWithInitial = array.reduce((accumulator, currentValue) => currentValue % accumulator, 0);
console.log(sumWithInitial); // Nan
```

```js
function addNumber(num1, num2) {
    if (isNaN(Number(num1)) || isNaN(Number(num2))) {
        return num1 + num2;
    }
    else {
        if ((Number(num1) <= 9 && Number(num1) >= 0) && (Number(num2) <= 9 && Number(num2) >= 0)) {
            return Number(num1) + Number(num2);
        }
    }
    return;
}

console.log(addNumber(5, 6));
console.log(addNumber(5, "6"));
console.log(addNumber(5, "b"));
console.log(addNumber("5b", 6));
```

```js
let arr = [3,1,2];
arr.sort;
console.log(arr);
console.log(arr.sort);
console.log(arr.sor);
```