function flakyService() {
  return new Promise((resolve, reject) => {
    let random = Math.floor(Math.random() * 2);
    if (random === 0) {
      resolve("Operation Successful");
    } else {
      reject("Operation failed");
    }
  });
}

const services = [flakyService(), flakyService(), flakyService()];

Promise.any(services)
  .then(console.log)
  .catch(() => console.log("All Promises failed"));
