var addEl = document.getElementById("add").addEventListener("click", adds)
var subtractEl = document.getElementById("subtract");
var multiplyEl = document.getElementById("multiply");
var divideEl = document.getElementById("divide");

var firstInput = document.getElementById("firstNumber");
var secondInput = document.getElementById("secondNumber");

var firstInputNumber = firstInput.value;
var secondInputNumber = secondInput.value;

var outputResult = document.getElementById("output");


/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

 function multiplies(a, b) {
  return a * b;
 }
/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

function adds(a, b) {
  return a + b;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

function subtracts(a, b) {
  return a - b;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

function divides(a, b) {
   return a / b;
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

function threeArguments(func, one, two) {
  return func(one, two);
}
