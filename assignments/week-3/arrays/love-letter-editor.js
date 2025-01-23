// You just need to implement the writeLoveLetter function
function writeLoveLetter(message, name) {
  message.unshift(name);

  return message;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", input => {
  // Parse input (expected to be JSON string format),
  // which should contain message and name
  const {message, name} = JSON.parse(input);

  // Call our function
  const result = writeLoveLetter(message, name);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
