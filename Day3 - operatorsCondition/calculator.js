/*
  Mini Project: Simple Calculator
Step-by-Step Hints:

Get two numbers from the user (convert to Number()).
Ask for the operator (+, -, *, /).
Use if-else or switch to do the math.
Log the result.
*/

const num1 = Number(prompt("Enter a value for num1"));
const num2 = Number(prompt("Enter a value for num2"));
const operator = prompt("Enter a operator( +, -, *, /) :").trim();
let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num !== 0 ? num1 / num2 : "Cannot divide by zero";
} else {
  result = "Invalid Operator";
}

console.log(` Result of ${num1} ${operator} ${num2} is: ${result}`);
