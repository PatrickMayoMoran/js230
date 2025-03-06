function operation() {
  return new Promise((resolve) => {
    console.log("Operation starting...");
    setTimeout(() => {
      resolve("Operation complete!");
    }, 1000);
  });
}

operation()
  .then(console.log)
  .finally(() => {
    console.log("cleaning up resources");
  });
