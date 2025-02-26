function delayLog() {
  for (let i = 1; i <= 10; i++) {
    let seconds = i * 1000;
    setTimeout(() => {
      console.log(i);
    }, seconds);
  }
}

delayLog();
