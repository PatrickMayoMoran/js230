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
  .then((result) => {
    console.log(`First successful service result: ${result}`);
  })
  .catch((error) => 
    console.error("All Promises failed", error)
  );
