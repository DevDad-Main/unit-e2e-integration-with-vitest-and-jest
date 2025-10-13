export function generateResultText(calculatinoResult) {
  let resultText = "";

  if (calculatinoResult === "invalid") {
    calculatinoResult = "Invalid input. You must enter valid numbers.";
  } else if (calculatinoResult !== "no-calc") {
    resultText = "Result: " + calculatinoResult;
  }
  return resultText;
}

export function outputResult(resultText) {
  const output = document.getElementById("result");
  return (output.textContent = resultText);
}
