// You just need to implement the addVIP function
function addVIP(queue, vipGuest) {
  queue.unshift(vipGuest);

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
  // which should contain queue and vipGuest
  const {queue, vipGuest} = JSON.parse(input);

  // Call our function
  const result = addVIP(queue, vipGuest);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
