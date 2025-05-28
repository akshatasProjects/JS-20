// Task 1: Declare & Log Variables

let name = "Ajay";
const age = 20;
let isStudent = false;
console.log(name, age, isStudent);

// Task 2: Type Checking
console.log(typeof name);
console.log(typeof age);
console.log(typeof name);

// 🔸 Task 3: Operators Practice

let a = 10,
  b = 30;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a % b);

// Task 4: Comparison Logic
console.log(a === b);
console.log(b > 5);
console.log(a > 5 && b < 5);

// If a person is over 18 and has a driving license
let hasLicense = true;
if (age > 18) {
  console.log("You can drive");
} else {
  console.log("Not eligible");
}

// Use logical && and a boolean flag like hasLicense
if (hasLicense && age > 18) {
  console.log("You can drive");
} else {
  console.log("Not eligible");
}
