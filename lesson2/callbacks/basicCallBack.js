function basicCallback(cb, number) {
  setTimeout(() => cb(number), 2000);
}
// Example usage:
basicCallback((number) => {
  console.log(number * 2);
}, 5);
// After 2 seconds, logs: 10
