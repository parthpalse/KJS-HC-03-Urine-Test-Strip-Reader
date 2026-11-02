const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("<h1>KJS-HC-03 Urine Test Strip Reader</h1>");
});
app.get("/about", function(req, res) {
  res.send("<h2>About the System</h2><p>This system reads urine test strips using colorimetry for point-of-care diagnostics.</p>");
});
app.get("/data", function(req, res) {
  const data = {
    analyte: "Glucose",
    greenReflectance: 155,
    concentration: 250,
    status: "Abnormal"
  };
  res.json(data);
});
app.get("/contact", function(req, res) {
  res.send("<h2>Contact</h2><p>Contact the Biomedical Engineering Department.</p>");
});
app.listen(8000, function() {
  console.log("Server running at http://localhost:8000");
});

