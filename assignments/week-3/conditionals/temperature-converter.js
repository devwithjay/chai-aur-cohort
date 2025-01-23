// You just need to implement the convertTemperature function
function convertTemperature(value, scale) {
  if (scale.toLowerCase() === "c") {
    var ans = (9 / 5) * value + 32;
    return `${ans}°F`;
  } else if(scale.toLowerCase() === "f") {
    var ans = ((value - 32) * 5) / 9;
    return `${ans}°C`;
  } else {
    return "Invalid Scale";
  }
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", input => {
  const {value, scale} = JSON.parse(input);
  const result = convertTemperature(value, scale);
  process.stdout.write(JSON.stringify(result));
});
