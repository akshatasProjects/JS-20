let balance = 1000;
let pinNum = 1234;

let pinEnter = Number(prompt("Enter Your PIN number"));

if (pinEnter === pinNum) {
  console.log(`Login successful! Your current balance is: ₹${balance}`);

  while (true) {
    let choice = prompt("Choose an option: 1) Deposit 2) Withdraw 3) Exit");

    if (choice === "1") {
      let depositAmount = Number(prompt("Enter amount to deposit:"));
      if (depositAmount > 0) {
        balance += depositAmount;
        console.log(`Deposit successful! New balance: ₹${balance}`);
      } else {
        console.log("Invalid amount.");
      }
    } else if (choice === "2") {
      let withdrawAmount = Number(prompt("Enter amount to withdraw:"));
      if (withdrawAmount > balance) {
        console.log("Insufficient funds.");
      } else if (withdrawAmount <= 0) {
        console.log("Invalid amount.");
      } else {
        balance -= withdrawAmount;
        console.log(`Withdrawal successful! New balance: ₹${balance}`);
      }
    } else if (choice === "3") {
      console.log("Thank you for using the ATM. Goodbye!");
      break;
    } else {
      console.log("Invalid choice. Please select 1, 2, or 3.");
    }
  }
} else {
  console.log("Incorrect PIN. Access Denied.");
}
