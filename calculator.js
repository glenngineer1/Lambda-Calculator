var addEl = document.getElementById("add");
var subtractEl = document.getElementById("subtract");
var multiplyEl = document.getElementById("multiply");
var divideEl = document.getElementById("divide");
var firstInput = document.getElementById("firstNumber");
var secondInput = document.getElementById("secondNumber");

function clickEvent(event) {
  // console.log(event);
}

function num1() {
  console.log("firstInput", firstInput);
}

buttons.addEventListener("click", clickEvent)
console.log("click", event);
/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

function multiplies(first, second) {
  return first * second;
}
var multiplication = multiplies();

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

function adds(first, second) {
  return first + second;
}
var addition = adds();
// console.log("adds", addition);

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

function subtracts(first, second) {
  return first - second;
}
var subtraction = subtracts();

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

function divides(first, second) {
  return first / second;
}
var division = divides();

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

function threeArguments(first, operation, second) {
  return operation
}
  var three = threeArguments(12, addition, 3);
  console.log("three", three);







