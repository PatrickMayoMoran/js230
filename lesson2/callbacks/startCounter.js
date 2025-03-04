function startCounter(callback) {
  let count = 1;
  let interval = setInterval(() => {
    let finished = callback(count);
    count += 1;
    if (finished) clearInterval(interval);
  }, 1000);
}
// Example usage:
startCounter((count) => {
  console.log(count);
  return count === 5;
});
// Logs 1, 2, 3, 4, 5, then stops
