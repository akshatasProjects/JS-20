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
const operator = prompt("Enter a operator( +, -, *, /) :");
let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
} else {
  result = "Invalid Operator";
}

console.log(` Result is : ${result}`);
