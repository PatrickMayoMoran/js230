new Promise((resolve) => {
  resolve(7);
})
  .then((result) => {
    return result * 2 + 7;
  })
  .then((result) => {
    return result * 2 + 7;
  })
  .then((result) => {
    return result * 2 + 7;
  })
  .then((result) => {
    return result * 2 + 7;
  })
  .then((result) => console.log(result));
