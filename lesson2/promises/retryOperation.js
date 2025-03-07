function retryOperation(operationFunc) {
  let attempts = 0;

  function attempt() {
    return operationFunc().catch((error) => {
      if (attempts < 2) {
        attempts++;
        console.log(`Retry attempt #${attempts}`);
        return attempt();
      } else {
        throw error;
      }
    });
  }

  return attempt().catch(() => console.log("Operation Failed"));
}

// Example usage:
retryOperation(
  () =>
    new Promise((resolve, reject) =>
      Math.random() > 0.33
        ? resolve("Success!")
        : reject(new Error("Fail!"))
    )
);
