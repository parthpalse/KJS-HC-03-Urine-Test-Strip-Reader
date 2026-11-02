const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/report", function(req, res) {
  const testData = {
    patientId: "PAT-1001",
    glucose: 250,
    protein: 30,
    pH: 6.5,
    status: "Abnormal"
  };
  res.render("report", { data: testData });
});
app.listen(3000, function() {
  console.log("Server running at http://localhost:3000");
});

