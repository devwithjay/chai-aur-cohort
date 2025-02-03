class Calculator {
  constructor() {
    this.displayString = '0';
    this.previousOperand = '';
    this.operation = undefined;
    this.shouldResetDisplay = false;

    this.initializeDOM();
    this.initializeTheme();
    this.attachEventListeners();
  }

  initializeDOM() {
    this.display = document.querySelector('.current-op');
    this.previousDisplay = document.querySelector('.previous-op');
    this.numberButtons = document.querySelectorAll('.button');
    this.operationButtons = document.querySelectorAll('.arithmetic');
    this.equalsButton = document.querySelector('.arithmetic:last-child');
    this.deleteButton = document.querySelector('.del')
    this.clearButton = document.querySelector('.control');
    this.lightToggle = document.querySelector('.sun');
    this.darkToggle = document.querySelector('.moon');
  }

  initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  attachEventListeners() {
    // Theme toggles
    this.lightToggle.addEventListener('click', () => this.setTheme('light'));
    this.darkToggle.addEventListener('click', () => this.setTheme('dark'));

    // Number buttons
    this.numberButtons.forEach(button => {
      const value = button.textContent;
      if (!isNaN(value) || value === '.') {
        button.addEventListener('click', () => this.appendNumber(value));
      }
    });

    // Operation buttons
    this.operationButtons.forEach(button => {
      if (button.textContent !== '=') {
        button.addEventListener('click', () =>
          this.chooseOperation(button.textContent),
        );
      }
    });

    // Equals and Clear buttons
    this.equalsButton.addEventListener('click', () => this.compute());
    this.clearButton.addEventListener('click', () => this.clear());

    // Delete Button
    this.deleteButton.addEventListener('click', () => this.delete());
  }

  setTheme = theme => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  delete = () => {
    // If display should be reset, clear everything
    if (this.shouldResetDisplay) {
      this.clear();
      return;
    }

    if (this.displayString.endsWith(' ')) {
      // Remove operator and spaces
      this.displayString = this.displayString.slice(0, -3);
      this.operation = undefined;
    } else {
      // Remove last character
      this.displayString = this.displayString.slice(0, -1);
    }

    // If display becomes empty, set to '0'
    if (this.displayString === '' || this.displayString === '-') {
      this.displayString = '0';
    }

    this.updateDisplay();
  };

  getOperatorPrecedence = op => {
    const precedence = {
      '+': 1,
      '-': 1,
      '×': 2,
      '÷': 2,
    };
    return precedence[op] || 0;
  };

  applyOperation = (a, b, op) => {
    const operations = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '×': (a, b) => a * b,
      '÷': (a, b) => {
        if (b === 0) throw new Error('Division by zero');
        return Number.isInteger(a / b) ? a / b : Number((a / b).toFixed(2));
      },
    };

    try {
      return operations[op](a, b);
    } catch (error) {
      alert(error.message);
      return null;
    }
  };

  evaluateExpression = expression => {
    const tokens = expression.split(' ').filter(token => token !== '');
    const values = [];
    const operators = [];

    const processOperator = () => {
      const b = values.pop();
      const a = values.pop();
      const op = operators.pop();
      const result = this.applyOperation(a, b, op);
      if (result === null) return null;
      values.push(result);
    };

    for (const token of tokens) {
      if (!isNaN(token)) {
        values.push(parseFloat(token));
      } else {
        while (
          operators.length > 0 &&
          this.getOperatorPrecedence(operators[operators.length - 1]) >=
            this.getOperatorPrecedence(token)
        ) {
          if (processOperator() === null) return null;
        }
        operators.push(token);
      }
    }

    while (operators.length > 0) {
      if (processOperator() === null) return null;
    }

    return values[0];
  };

  appendNumber = number => {
    if (this.shouldResetDisplay) {
      this.displayString = '';
      this.shouldResetDisplay = false;
    }

    if (this.displayString === '0' && number !== '.') {
      this.displayString = number;
    } else if (number === '.' && this.displayString.includes('.')) {
      return;
    } else {
      this.displayString += number;
    }
    this.updateDisplay();
  };

  chooseOperation = op => {
    if (this.displayString === '') return;

    if (!this.displayString.endsWith(' ')) {
      this.displayString += ` ${op} `;
      this.operation = op;
      this.shouldResetDisplay = false;
    }
    this.updateDisplay();
  };

  compute = () => {
    const result = this.evaluateExpression(this.displayString);
    if (result !== null) {
      this.previousOperand = this.displayString;
      this.displayString = result.toString();
      this.operation = undefined;
      this.shouldResetDisplay = true;
    }
    this.updateDisplay();
  };

  clear = () => {
    this.displayString = '0';
    this.previousOperand = '';
    this.operation = undefined;
    this.shouldResetDisplay = false;
    this.updateDisplay();
  };

  updateDisplay = () => {
    this.display.textContent = this.displayString;
    this.previousDisplay.textContent = this.previousOperand;
  };
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Calculator();
});
