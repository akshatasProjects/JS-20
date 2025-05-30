/*
Mini Project: Simple Login System

Instructions:
Ask user for a username and password.
Check if they match pre-defined values.
Print success or error message
*/

const validUser = "admin";
const validPass = "1234";

let userName = prompt("Enter your name");
let password = prompt("Enter your password");

let loginUser =
  userName.toLowerCase() === validUser.toLowerCase() && password === validPass
    ? "Login successful!"
    : "Invalid credentials";

console.log(loginUser);
