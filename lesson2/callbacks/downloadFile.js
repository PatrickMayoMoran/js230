function downloadFile(callback) {
  console.log("Downloading file...");
  setTimeout(() => callback("download complete"), 1500);
}

downloadFile(console.log);
