/*
  Objective:
  User needs to guess a 3-digit secret code (e.g., 431). The user has only 5 attempts. After each guess, give hints:
"Correct position" if a digit is correct and in the right place.
"Wrong position" if the digit exists but is in the wrong place.
"Not in code" if the digit is not in the code at all.


Steps to Try It Yourself:
Step 1: Define the Secret Code (It's a string so you can check each digit easily).
Step 2: Set Attempt Limit (You need a for loop that gives the user 5 attempts.)
Step 3: Prompt User for Guess (Inside the loop, ask the user for a 3-digit code:)
Step 4: Check If Correct (If the whole guess matches the secret code, display "You guessed it!" and break the loop.)
Step 5: Compare Digit by Digit
  - Loop over each digit (hint: use a for loop with index 0 to 2)
    For each digit:
      - If it matches the same index in secret code → "Correct position"
      - Else if it exists somewhere in secret code → "Wrong position"
      - Else → "Not in code"
*/

let code = "431";

for (let i = 1; i <= 5; i++) {
  let guessCode = prompt("Enter the 3 digits for code");

  if (code === guessCode) {
    console.log("You guessed it right");
    break;
  } else {
    for (let j = 0; j < 3; j++) {
      if (guessCode[j] === code[j]) {
        console.log(`Digit ${guess[j]} is in the ✅ correct position`);
      } else if (code.includes(guessCode[j])) {
        console.log(`Digit ${guess[j]} is in the ❌ wrong position`);
      } else {
        console.log(`Digit ${guess[j]} is 🚫 not in the code`);
      }
    }
    console.log(`❗ Attempts left: ${5 - i}`);
    if (i === 5) {
      console.log("💥 Game Over! The correct code was " + code);
    }
  }
}
