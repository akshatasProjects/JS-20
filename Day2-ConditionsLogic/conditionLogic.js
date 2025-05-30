/* 1. Eligibility Checker (Ternary Version) */
let age = 20;
let canVote = age > 20 ? "You can vote" : "You cannot vote";
console.log(canVote);

/* Movie Access Logic */
let ageMovie = 17;
let hasPermission = true;

// If age is 18 or above, OR if hasPermission is true and age > 15 — allow entry
if (ageMovie >= 18 || (hasPermission && age > 15)) {
  console.log("You are allowed to watch");
} else {
  console.log("Not allowed");
}
