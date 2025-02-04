// Store the values in Constant
function convertTemperature() {
  const tempInput = document.getElementById("temperature").value;
  const scale = document.getElementById("scale").value;
  const resultsDiv = document.getElementById("results");

  // It will show the (Not a valid number) when there is no input number or any wrong input
  if (isNaN(tempInput) || tempInput.trim() === "") {
    resultsDiv.innerHTML = "Please enter a valid number.";
    return;
  }
  let displayTemperature;
  //Used to convert the given temprature in celcius and faranhite and kelvin
  switch (scale) {
    case "celsius":
      //It will display the 2 dijit after decimal point in temprature
      displayTemperature = tempInput + " °C";
      break;
    case "fahrenheit":
      const fahrenheit = (tempInput * 9) / 5 + 32;
      displayTemperature = fahrenheit + " °F";
      break;
    case "kelvin":
      const kelvin = tempInput + 273.15;
      displayTemperature = kelvin + " K";
      break;
  }

  // It will display the Result
  resultsDiv.innerHTML = `<p><strong>Converted Temperature:</strong></p>
                            <p>${displayTemperature}</p>`;
}
