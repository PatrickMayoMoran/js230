function retryOperation(operationFunc) {
  operationFunc()
    .catch(() => operationFunc())
    .catch(() => operationFunc())
    .catch(() => console.log("operation failed"));
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
