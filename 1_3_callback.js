function readSensor(callback) {
  const greenValue = 155;
  console.log("Reading urine test strip sensor...");
  setTimeout(() => {
    callback(greenValue);
  }, 2000);
}
function analyzeResult(greenValue) {
  if (greenValue < 140) {
    console.log("Green reflectance is low.");
    console.log("Advisory: High glucose detected. Further testing required.");
  } else {
    console.log("Green reflectance is within normal range.");
    console.log("Advisory: Glucose level appears normal.");
  }
}
readSensor(analyzeResult);

