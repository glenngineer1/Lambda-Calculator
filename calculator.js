var addEl = document.getElementById("add").addEventListener("click", add);
var subtractEl = document.getElementById("subtract").addEventListener("click", subtract);
var multiplyEl = document.getElementById("multiply").addEventListener("click", mutliply);
var divideEl = document.getElementById("divide").addEventListener("click", divide);

var firstInput = document.getElementById("firstNumber");
var secondInput = document.getElementById("secondNumber");

var outputResult = document.getElementById("output");

function add() {
  firstInputNumber = firstInput.value;
  secondInputNumber = secondInput.value;
  var addResult = calculation(adds, firstInputNumber, secondInputNumber);
  outputResult.innerHTML += `<div>${addResult}</div>`;
}

function subtract() {
  firstInputNumber = firstInput.value;
  secondInputNumber = secondInput.value;
  var subtractResult = calculation(subtracts, firstInputNumber, secondInputNumber);
  outputResult.innerHTML += `<div>${subtractResult}</div>`;
}

function mutliply() {
  firstInputNumber = firstInput.value;
  secondInputNumber = secondInput.value;
  var multiplyResult = calculation(multiplies, firstInputNumber, secondInputNumber);
  outputResult.innerHTML += `<div>${multiplyResult}</div>`;
}

function divide() {
  firstInputNumber = firstInput.value;
  secondInputNumber = secondInput.value;
  var divideResult = calculation(divides, firstInputNumber, secondInputNumber);
  outputResult.innerHTML += `<div>${divideResult}</div>`;
}


function adds(a, b) {
  return parseInt(a) + parseInt(b);
}
function subtracts(a, b) {
  return a - b;
}

function multiplies(a, b) {
  return a * b;
 }

function divides(a, b) {
   return a / b;
}

function calculation(operation, one, two) {
  return operation(one, two);
}


