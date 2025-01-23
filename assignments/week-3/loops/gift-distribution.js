// You just need to implement the distributeGifts function
function distributeGifts(totalGifts, friends) {
  let giftsGiven = 0;

  for (let i = 0; i < friends; i++) {
    if (totalGifts > 0) {
      giftsGiven++;
      totalGifts--;
    }
  }

  return giftsGiven;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", input => {
  const {totalGifts, friends} = JSON.parse(input); // Parse input as number
  // Call our function
  const result = distributeGifts(totalGifts, friends);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
