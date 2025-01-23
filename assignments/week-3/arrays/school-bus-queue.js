// You just need to implement the removeStudent function
function removeStudent(bus) {
  bus.shift();

  return bus;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", input => {
  // Parse input (expected to be JSON string format),
  // which should contain bus
  const {bus} = JSON.parse(input);

  // Call our function
  const result = removeStudent(bus);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
