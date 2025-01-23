// You just need to implement the eatCandy function
function eatCandy(candyJar) {
  candyJar.pop();

  return candyJar;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", input => {
  // Parse input (expected to be JSON string format),
  // which should contain candyJar
  const {candyJar} = JSON.parse(input);

  // Call our function
  const result = eatCandy(candyJar);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
