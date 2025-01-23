// You just need to implement the calculator function
function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    
    case "-":
      return num1 - num2;
    
    case "*":
      return num1 * num2;
    
    case "/":
      return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    
    default:
      return "Invalid Operator";
  }
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", input => {
  const {num1, num2, operator} = JSON.parse(input);
  const result = calculator(num1, num2, operator);
  process.stdout.write(JSON.stringify(result));
});
