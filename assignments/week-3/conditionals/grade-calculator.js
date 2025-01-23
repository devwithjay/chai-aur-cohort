// You just need to implement the calculateGrade function
function calculateGrade(marks) {
  if (marks >= 90) {
    return "A";
  } else if (marks >= 80 && marks < 90) {
    return "B";
  } else if (marks >= 70 && marks < 80) {
    return "C";
  } else if (marks >= 60 && marks < 70) {
    return "D";
  } else {
    return "F";
  }
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", input => {
  const {marks} = JSON.parse(input);
  const result = calculateGrade(marks);
  process.stdout.write(JSON.stringify(result));
});
