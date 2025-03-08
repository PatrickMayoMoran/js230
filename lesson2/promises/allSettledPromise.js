function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}

const services = [flakyService(), flakyService(), flakyService()];

Promise.allSettled(services)
  .then((results) => {
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(
          `Service ${index + 1} succeeded with message: ${result.value}`
        );
      } else {
        console.log(
          `Service ${index + 1} failed with message: ${result.reason}`
        );
      }
    });
  });
