// You just need to implement the checkVotingEligibility function
function checkVotingEligibility(age) {
  if (age >= 18) {
    return "Eligible";
  } else {
    return "Not Eligible";
  }
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", input => {
  const {age} = JSON.parse(input);
  const result = checkVotingEligibility(age);
  process.stdout.write(JSON.stringify(result));
});
