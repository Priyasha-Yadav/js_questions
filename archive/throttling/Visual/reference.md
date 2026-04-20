Q. What is throttling?

In web development, throttling is the technique of limiting how often a function can be executed over time, no matter how many times it’s triggered.

- Useful for performance optimization.

- Prevents expensive functions from being called too frequently.

Examples: 
- Window Resize Events
- Scroll Events
- API Calls on User Input (Search Box)



https://coffeebytes.dev/en/javascript/debounce-and-throttle-interactive-explanation/?utm_source=chatgpt.com




---

## ⚙️ **Throttle — Summary for Notes**

### 🔹 What is Throttling?

> **Throttling** is a technique used to **limit how often a function can run** over time.

It ensures that a function **executes only once every X milliseconds**, no matter how many times it’s triggered.

---

### 🔹 Why do we need Throttling?

Because some events (like **scroll**, **resize**, or **click**) can fire **hundreds of times per second**,
and calling a heavy function every time can make the page **laggy and slow**.

Throttle helps by controlling the frequency of those calls.

---

### 🔹 Real-life Analogy (Waiter Example)

> 🧑‍🍳 Imagine a waiter who can only go to the kitchen **once every 2 seconds**.
> Even if customers shout many orders during that time, he’ll only take **one trip** to the kitchen every 2 seconds.

That’s what throttling does — it ignores the extra calls until the delay time passes.

---

### 🔹 How Throttle Works (Intuition)

* It takes two arguments:

  1. A **task (callback function)** — what you want to run
  2. A **delay** — minimum time gap between executions
* It uses a **closure** to remember the **last time** the function ran (`lastCall`).

---

### 🔹 Throttle Code (Simple Example)

```js
   function throttling(sendMessage, timeDelay) {
    let lastCall = 0;
    return function(message) {
        const now = Date.now();
        if (now - lastCall >= timeDelay) {
            sendMessage(message); 
            lastCall = now;
        }
    }
}

function sendMessage(message) {
    console.log(`Send Message:`, message);
}

const sendMessageWithThrottle = throttling(sendMessage, 5000);

sendMessageWithThrottle('Hi');       
sendMessageWithThrottle('Hi Hello'); 
sendMessageWithThrottle('Hi Hi');    
```

✅ Runs only once every 3 seconds even if scrolling continuously.

---

### 🔹 Types of Throttling

| Type                   | Description                                                        | Analogy                                           |
| ---------------------- | ------------------------------------------------------------------ | ------------------------------------------------- |
| **Leading**            | Executes immediately on first call, ignores rest until time passes | Waiter runs right away, then ignores new orders   |
| **Trailing**           | Waits, then executes once with the *last* action                   | Waiter waits for 2s, then takes the latest order  |
| **Leading + Trailing** | Executes immediately *and* once more after the delay               | Waiter goes right away and double-checks after 2s |

---

### 🔹 Common Use Cases

| Scenario              | Why Use Throttle                                |
| --------------------- | ----------------------------------------------- |
| **Scroll events**     | To avoid calling APIs too often while scrolling |
| **Resize events**     | Prevent repeated layout recalculations          |
| **Button clicks**     | Avoid multiple rapid submissions                |
| **Mouse move / drag** | Limit UI updates for smoother animation         |

---

### 🔹 Throttle vs Debounce

| Feature  | **Throttle**               | **Debounce**                 |
| -------- | -------------------------- | ---------------------------- |
| Executes | At regular intervals       | After a pause in activity    |
| Use case | Scroll, resize, drag       | Typing in search box         |
| Example  | Limit API calls per second | Wait until user stops typing |

---

### 💬 In one line:

> **Throttle = Run a function at controlled intervals, no matter how often it’s triggered.**

---
