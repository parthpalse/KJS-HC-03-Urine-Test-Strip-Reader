const fs = require("fs");
// WRITE
if (!fs.existsSync("test_result.txt")) {
  fs.writeFileSync("test_result.txt", "Urine Test Strip Results\n");
  console.log("Data written successfully");
}
// APPEND
fs.appendFileSync("test_result.txt", "Glucose: 250 mg/dL\n");
fs.appendFileSync("test_result.txt", "Protein: 30 mg/dL\n");
fs.appendFileSync("test_result.txt", "pH: 6.5\n");
console.log("New test data appended successfully");
// READ
const data = fs.readFileSync("test_result.txt", "utf8");
console.log("\nComplete Test Data:");
console.log(data);

