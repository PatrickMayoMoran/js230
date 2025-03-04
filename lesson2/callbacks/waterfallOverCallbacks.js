function waterfallOverCallbacks(array, argument) {
  array.forEach(callback => {
    argument = callback(argument);
  });

  console.log(argument);
}
// Example usage:
const double = (x) => x * 2;
waterfallOverCallbacks([double, double, double], 1);
// Logs: 8
