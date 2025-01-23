// You just need to implement the checkEvenOdd function
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", input => {
  const {num} = JSON.parse(input);
  const result = checkEvenOdd(num);
  process.stdout.write(JSON.stringify(result));
});
