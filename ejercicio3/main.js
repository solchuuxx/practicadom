const operationSelect = document.getElementById("operacion");
const number1Input = document.getElementById("numero1");
const number2Input = document.getElementById("numero2");
const calculateButton = document.getElementById("calcular");
const resultParagraph = document.getElementById("resultado");

calculateButton.addEventListener("click", calcular);

function calcular() {
  const operacion = operationSelect.value;
  const numero1 = parseFloat(number1Input.value);
  const numero2 = parseFloat(number2Input.value);

  let result;
  if (operacion === "suma") {
    result = numero1 + numero2;
  } else if (operacion === "resta") {
    result = numero1 - numero2;
  } else if (operacion === "multiplicacion") {
    result = numero1 * numero2;
  } else if (operacion === "division") {
    result = numero1 / numero2;
  }

  resultParagraph.textContent = `El resultado de la operación es: ${result}`;
}
