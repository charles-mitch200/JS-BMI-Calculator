const buttonElem = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionElem = document.getElementById("weight-condition");

// Fucntion that calculates BMI
const calculateBMI = () => {
  // Get the weight and height inputs
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;

  // Compute BMI and display ot on the page
  const bmiValue = (weightValue / heightValue ** 2).toFixed(2);
  bmiInputEl.value = bmiValue;

  //   Update the weight condition
  weightConditionElem.innerText =
    bmiValue < 18.5
      ? "Under Weight"
      : bmiValue >= 18.5 && bmiValue <= 24.9
      ? "Normal Weight"
      : bmiValue >= 25 && bmiValue <= 29.9
      ? "Overweight"
      : "Obese";
};

// Calculate BMI once the 'Compute BMI' button is clicked
buttonElem.addEventListener("click", calculateBMI);
