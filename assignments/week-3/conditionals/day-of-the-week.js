// You just need to implement the getDayOfWeek function
function getDayOfWeek(day) {
  switch (day) {
    case 1:
      return "Monday";
    
    case 2:
      return "Tuesday";
    
    case 3:
      return "Wednesday";
    
    case 4:
      return "Thrusday";
    
    case 5:
      return "Friday";
    
    case 6:
      return "Saturday";
    
    case 7:
      return "Sunday";
    
    default:
      return "Invalid Day";
  }
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", input => {
  const {day} = JSON.parse(input);
  const result = getDayOfWeek(day);
  process.stdout.write(JSON.stringify(result));
});
