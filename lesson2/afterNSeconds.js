function afterNSeconds(callback, seconds) {
  let milliseconds = seconds * 1000;
  setTimeout(callback, seconds);
}

afterNSeconds(() => console.log("Cat"), 4);
afterNSeconds(() => console.log("Tiny"), 2);

