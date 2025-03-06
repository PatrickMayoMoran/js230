let flakyService = new Promise((resolve, reject) => {
  let random = Math.floor(Math.random() * 2);
  if (random === 0) {
    resolve("Operation Successful");
  } else {
    reject("Operation failed");
  }
});

flakyService.then(console.log).catch(console.error);
