const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer(function(req, res) {
  if (req.url == "/" && req.method == "GET") {
    fs.readFile(path.join(__dirname, "urine_reader.html"), function(err, data) {
      if (err) {
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.write("Error reading HTML file");
        res.end();
        return;
      }
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
    });
  }
  else if (req.url == "/data" && req.method == "GET") {
    const data = {
      analyte: "Glucose",
      greenReflectance: 155,
      concentration: 250,
      status: "Abnormal"
    };
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify(data, null, 2));
    res.end();
  }
  else {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.write("Page Not Found");
    res.end();
  }
});
server.listen(8000, function() {
  console.log("Server running at http://localhost:8000");
});

