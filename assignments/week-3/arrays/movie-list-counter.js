// You just need to implement the countMovies function
function countMovies(movieList) {
  return movieList.length;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", input => {
  // Parse input (expected to be JSON string format),
  // which should contain movieList
  const {movieList} = JSON.parse(input);

  // Call our function
  const result = countMovies(movieList);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
