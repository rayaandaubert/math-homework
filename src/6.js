const express = require('express');
const app = express();
app.use(express.json());

// GET /math-homework route
app.get('/math-homework', (req, res) => {
  const problem = generateMathProblem();
  res.json({ problem });
});

// POST /math-homework route
app.post('/math-homework', (req, res) => {
  const { answer } = req.body;
  if (answer === 'correct') {
    res.status(200).send('Congratulations!');
  } else {
    res.status(400).send('Incorrect answer');
  }
});

// Generate a random math problem
function generateMathProblem() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 3)];
  let problem;
  switch (operator) {
    case '+':
      problem = `What is ${num1} + ${num2}`;
      break;
    case '-':
      problem = `What is ${num1} - ${num2}`;
      break;
    case '*':
      problem = `What is ${num1} * ${num2}`;
      break;
    case '/':
      problem = `What is ${num1} / ${num2}`;
      break;
  }
  return problem;
}