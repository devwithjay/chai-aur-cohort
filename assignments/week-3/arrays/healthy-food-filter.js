// You just need to implement the filterHealthy function
function filterHealthy(foodList) {
  return foodList.filter(item => !item.includes("Burger"));
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", input => {
  // Parse input (expected to be JSON string format),
  // which should contain foodList
  const {foodList} = JSON.parse(input);

  // Call our function
  const result = filterHealthy(foodList);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
