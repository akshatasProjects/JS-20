/*
Problem:
Create a game where the user must guess a secret number between 1 and 10.

Goals:
- Use a loop to allow multiple attempts (up to 3).
- After each guess, show whether the guess was correct or not.
- If correct, show a success message and end.
- If not, show attempts remaining.
- After 3 failed attempts, show the correct number.

Hints:
Use Math.floor(Math.random() * 10) + 1 to generate a secret number.
Use a loop (for or while) to control attempts.

*/

let playAgain = true;

let maxAttempts = 3;
let randomNum = Math.floor(Math.random() * 10) + 1;

while (playAgain) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    let guessNum = Number(prompt("Enter a number between 1 to 10"));

    if (guessNum === randomNum) {
      console.log("🎉 You guessed it right!");
      break;
    } else {
      let remaining = maxAttempts - attempt;
      if (remaining > 0) {
        console.log(`❌ Wrong number. You have ${remaining} attempts left.`);
      } else {
        console.log("🚫 No attempts left.");
      }
    }
    let again = prompt("Do you want to play again? (yes/no)").toLowerCase();
    playAgain = again === "yes";
  }

  console.log(`🔎 The actual number was: ${randomNum}`);
  let again = prompt("Do you want to play again? (yes/no)").toLowerCase();
  playAgain = again === "yes";
}
