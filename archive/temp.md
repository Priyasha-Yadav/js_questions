Perfect — that’s a **real interview-style constraint** 👏
Here are **pure JavaScript DSA solutions** (minimal or no built-in functions like `sort()`, `slice()`, `reverse()`, etc.).
Everything is implemented using **loops, swaps, and basic logic** — ideal for interviews.

---

## 🟢 1️⃣ Find Maximum and Minimum in an Array

```js
function findMinMax(arr) {
  let min = arr[0], max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  return { min, max };
}

// Example
console.log(findMinMax([3, 1, 7, 2, 8]));
```

---

## 🟢 2️⃣ Find Second and Third Largest Element

```js
function secondAndThirdLargest(arr) {
  let first = -Infinity, second = -Infinity, third = -Infinity;

  for (let num of arr) {
    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second && num < first) {
      third = second;
      second = num;
    } else if (num > third && num < second) {
      third = num;
    }
  }

  return { second, third };
}

// Example
console.log(secondAndThirdLargest([10, 20, 4, 45, 99]));
```

---

## 🟢 3️⃣ Reverse an Array (In-place)

```js
function reverseArray(arr) {
  let i = 0, j = arr.length - 1;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}

// Example
console.log(reverseArray([1, 2, 3, 4, 5]));
```

---

## 🟢 4️⃣ Rotate Array by k Positions

(Rotate right by k)

```js
function rotateArray(arr, k) {
  k = k % arr.length;

  // Helper to reverse a portion of array
  function reverse(start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  reverse(0, arr.length - 1);
  reverse(0, k - 1);
  reverse(k, arr.length - 1);

  return arr;
}

// Example
console.log(rotateArray([1,2,3,4,5,6,7], 3));
```

---

## 🟢 5️⃣ Move All Zeros to the End

```js
function moveZeros(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
  return arr;
}

// Example
console.log(moveZeros([0, 1, 0, 3, 12]));
```

---

## 🟢 6️⃣ Remove Duplicates

### From Sorted Array

```js
function removeDuplicatesSorted(arr) {
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }
  return arr.slice(0, j + 1);
}
```

### From Unsorted Array

```js
function removeDuplicatesUnsorted(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < unique.length; j++) {
      if (arr[i] === unique[j]) {
        found = true;
        break;
      }
    }
    if (!found) unique.push(arr[i]);
  }
  return unique;
}
```

---

## 🟢 7️⃣ Merge Two Sorted Arrays Without Extra Space

```js
function mergeSortedArrays(arr1, arr2) {
  let i = arr1.length - 1;
  let j = 0;

  while (i >= 0 && j < arr2.length && arr1[i] > arr2[j]) {
    let temp = arr1[i];
    arr1[i] = arr2[j];
    arr2[j] = temp;
    i--;
    j++;
  }

  // Manual insertion sort on both
  for (let a = 1; a < arr1.length; a++) {
    let key = arr1[a];
    let b = a - 1;
    while (b >= 0 && arr1[b] > key) {
      arr1[b + 1] = arr1[b];
      b--;
    }
    arr1[b + 1] = key;
  }

  for (let a = 1; a < arr2.length; a++) {
    let key = arr2[a];
    let b = a - 1;
    while (b >= 0 && arr2[b] > key) {
      arr2[b + 1] = arr2[b];
      b--;
    }
    arr2[b + 1] = key;
  }

  return { arr1, arr2 };
}
```

---

## 🟢 8️⃣ Union and Intersection of Two Arrays

```js
function union(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) result.push(arr1[i]);
  for (let j = 0; j < arr2.length; j++) {
    let found = false;
    for (let k = 0; k < result.length; k++) {
      if (arr2[j] === result[k]) {
        found = true;
        break;
      }
    }
    if (!found) result.push(arr2[j]);
  }
  return result;
}

function intersection(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        let exists = false;
        for (let k = 0; k < result.length; k++) {
          if (result[k] === arr1[i]) exists = true;
        }
        if (!exists) result.push(arr1[i]);
      }
    }
  }
  return result;
}
```

---

## 🟢 9️⃣ Majority Element (Moore’s Voting)

```js
function majorityElement(arr) {
  let count = 0, candidate = null;
  for (let num of arr) {
    if (count === 0) candidate = num;
    count += (num === candidate) ? 1 : -1;
  }
  return candidate;
}
```

---

## 🟢 🔟 Subarray with Sum 0 Exists

```js
function subarrayWithZeroSum(arr) {
  let sum = 0;
  let sums = {};
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === 0 || sums[sum]) return true;
    sums[sum] = true;
  }
  return false;
}
```

---

## 🟢 1️⃣1️⃣ Maximum Subarray Sum (Kadane’s)

```js
function maxSubarraySum(arr) {
  let maxSoFar = arr[0];
  let current = arr[0];
  for (let i = 1; i < arr.length; i++) {
    current = (current + arr[i] > arr[i]) ? current + arr[i] : arr[i];
    if (current > maxSoFar) maxSoFar = current;
  }
  return maxSoFar;
}
```

---

## 🟢 1️⃣2️⃣ Subarray with Given Sum (Positive numbers)

```js
function subarrayWithGivenSum(arr, target) {
  let start = 0, sum = 0;
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];
    while (sum > target && start < end) {
      sum -= arr[start];
      start++;
    }
    if (sum === target) return arr.slice(start, end + 1);
  }
  return [];
}

// Example
console.log(subarrayWithGivenSum([1,2,3,7,5], 12)); // [2,3,7]
```

---

Would you like me to combine all these into a single **`dsa.js` file** with comments and simple console examples for practice?
(It will be formatted neatly for quick review and execution.)
