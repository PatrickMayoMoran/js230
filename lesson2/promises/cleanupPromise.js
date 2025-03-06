let cleanUp = new Promise((resolve) => {
  resolve("Data download complete");
});

cleanUp.then(console.log).finally(console.log("Closing files and shutting down server"));
