// You just need to implement the addPuppy function
function addPuppy(queue, puppyName) {
  queue.unshift(puppyName);

  return queue;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", input => {
  // Parse input (expected to be JSON string format),
  // which should contain queue and puppyName
  const {queue, puppyName} = JSON.parse(input);

  // Call our function
  const result = addPuppy(queue, puppyName);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
