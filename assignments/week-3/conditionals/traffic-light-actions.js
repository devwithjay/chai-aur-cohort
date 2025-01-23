// You just need to implement the trafficLightAction function
function trafficLightAction(color) {
  switch (color.toLowerCase()) {
    case "red":
      return "Stop";
    
    case "yellow":
      return "Slow Down";
    
    case "green":
      return "Go";
    
    default:
      return "Invalid Color";
  }
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", input => {
  const {color} = JSON.parse(input);
  const result = trafficLightAction(color);
  process.stdout.write(JSON.stringify(result));
});
