function analyzeStrip() {
  const greenValue = document.getElementById("greenValue").value;
  const result = document.getElementById("result");
  if (greenValue === "") {
    result.innerText = "Please enter a green reflectance value.";
  } else if (greenValue < 140) {
    result.innerText = "Green reflectance is low. Elevated glucose detected.";
    result.style.color = "red";
  } else {
    result.innerText = "Green reflectance is normal. Glucose within expected range.";
    result.style.color = "green";
  }
}

