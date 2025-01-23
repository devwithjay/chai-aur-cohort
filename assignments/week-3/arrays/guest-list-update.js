// You just need to implement the addGuest function
function addGuest(guestList, newGuest) {
  guestList.push(newGuest);

  return guestList;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", input => {
  // Parse input (expected to be JSON string format),
  // which should contain guestList and newGuest
  const {guestList, newGuest} = JSON.parse(input);

  // Call our function
  const result = addGuest(guestList, newGuest);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
