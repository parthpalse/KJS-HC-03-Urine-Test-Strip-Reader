const fs = require("fs").promises;
async function fileOperation() {
  try {
    // WRITE
    try {
      await fs.access("test_result2.txt");
    } catch {
      await fs.writeFile("test_result2.txt", "Urine Test Strip Results\n");
      console.log("Data written successfully");
    }
    // APPEND
    await fs.appendFile("test_result2.txt", "\nGlucose: 500 mg/dL\n");
    await fs.appendFile("test_result2.txt", "Protein: 100 mg/dL\n");
    await fs.appendFile("test_result2.txt", "Status: Critical\n");
    console.log("New test data appended successfully");
    // READ
    const data = await fs.readFile("test_result2.txt", "utf8");
    console.log("\nComplete Test Data:");
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  }
}
fileOperation();

