const convertBtn = document.getElementById("convertBtn");
const inputValue = document.getElementById("inputValue");
const inputUnit = document.getElementById("inputUnit");
const outputValue = document.getElementById("outputValue");
const outputUnit = document.getElementById("outputUnit");

convertBtn.addEventListener("click", function() {
  let input = parseFloat(inputValue.value);

  if (inputUnit.value === "celsius") {
    if (outputUnit.value === "farenheit") {
      outputValue.value = (input * 9/5) + 32;
    } else if (outputUnit.value === "kelvin") {
      outputValue.value = input + 273.15;
    } else {
      outputValue.value = input;
    }
  } else if (inputUnit.value === "farenheit") {
    if (outputUnit.value === "celsius") {
      outputValue.value = (input - 32) * 5/9;
    } else if (outputUnit.value === "kelvin") {
      outputValue.value = (input - 32) * 5/9 + 273.15;
    } else {
      outputValue.value = input;
    }
  } else if (inputUnit.value === "kelvin") {
    if (outputUnit.value === "celsius") {
      outputValue.value = input - 273.15;
    } else if (outputUnit.value === "farenheit") {
      outputValue.value = (input - 273.15) * 9/5 + 32;
    } else {
      outputValue.value = input;
    }
  }
});
