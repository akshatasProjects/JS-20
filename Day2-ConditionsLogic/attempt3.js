/*
Mini Project: Simple Login System

Instructions:
Ask user for a username and password.
Check if they match pre-defined values.
Print success or error message
*/

const validUser = "admin";
const validPass = "1234";

for (let i = 1; i <= 3; i++) {
  let userName = prompt("Enter your username").trim().toLowerCase();
  let password = prompt("Enter your password").trim();

  if (userName === validUser && password === validPass) {
    console.log("Login Successful");
    break;
  } else {
    console.log("Invalid User Credentials");
    if (i === 3) {
      console.log("Access Denied after 3 attempts");
    }
  }
}
