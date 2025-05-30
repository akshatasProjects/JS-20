/*
1. Mini Challenge: Grade Checker

Step-by-Step Hints:
Use prompt() to get marks from the user (convert to Number).
Use if, else if, else to check the range:
marks >= 90: Grade A
marks >= 80: Grade B
marks >= 70: Grade C
marks >= 60: Grade D
otherwise: Grade F
Print a message like "You got grade B".

*/

let marks = Number(prompt("Enter Your marks (0-100):").trim());

if (marks >= 90) {
  console.log("You got grade A");
} else if (marks >= 80) {
  console.log("You got grade B");
} else if (marks >= 70) {
  console.log("You got grade C");
} else if (marks >= 60) {
  console.log("You got grade D");
} else {
  console.log("You got grade F");
}
