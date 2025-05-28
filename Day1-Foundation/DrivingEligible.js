/*Build a simple eligibility checker that asks for user info and tells them if they can drive.

Requirements:
Ask user for:
  name (string) 
  age (number)
  hasLicense (boolean — yes or no)

Use conditionals to:
  ✅ Allow driving only if age >= 18 and hasLicense === true
  ❌ Otherwise, show a proper message (underage, or missing license)

Print a message:
"Alex, you are allowed to drive."
"Alex, you're not eligible to drive."
*/

let name = prompt("Please Enter you name").trim();
let age = Number(prompt("Please enter your age"));
let licenseInput = prompt("Do you have a driving license? (yes/no)");
let hasLicense = licenseInput.toLowerCase() === "yes";

if (hasLicense && age >= 18) {
  console.log(`${name} you are allowed to drive. `);
} else {
  console.log(`${name} you're not eligible to drive.`);
}
