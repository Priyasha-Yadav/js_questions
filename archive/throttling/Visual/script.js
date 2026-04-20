// Initialize counters
let normalCount = 0;
let debounceCount = 0;
let throttleCount = 0;

// Normal waiter
const updateNormalOrder = (foodEmoji) => {
  normalCount++;
  document.getElementById(
    'normalDisplay'
  ).textContent = `Taking order for: ${foodEmoji}`;
  document.getElementById('totalCount').textContent = normalCount;
  document.getElementById('normalCount').textContent = normalCount;
};

// Debounced waiter
const updateDebounceOrder = _.debounce((foodEmoji) => {
  debounceCount++;
  document.getElementById(
    'debounceDisplay'
  ).textContent = `Taking order for: ${foodEmoji}`;
  document.getElementById('debounceCount').textContent = debounceCount;
}, 2000);

// Throttled waiter
const updateThrottleOrder = _.throttle((foodEmoji) => {
  throttleCount++;
  document.getElementById(
    'throttleDisplay'
  ).textContent = `Taking order for: ${foodEmoji}`;
  document.getElementById('throttleCount').textContent = throttleCount;
}, 2000);

// Add click handlers to all buttons
document.querySelectorAll('.food-btn').forEach((button) => {
  button.addEventListener('click', (e) => {
    const foodEmoji = e.target.textContent;
    updateNormalOrder(foodEmoji);
    updateDebounceOrder(foodEmoji);
    updateThrottleOrder(foodEmoji);
  });
});