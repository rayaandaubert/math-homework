
const express = require('express');
const app = express();

app.get('/', function(req, res) {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
  let equation = '';

  if (operator === '+') {
    equation = `${num1} + ${num2}`;
  } else if (operator === '-') {
    equation = `${num1} - ${num2}`;
  } else if (operator === '*') {
    equation = `${num1} * ${num2}`;
  } else if (operator === '/') {
    equation = `${num1} / ${num2}`;
  }

  res.send(equation);
});

app.listen(3000, () => console.log('Listening on port 3000'));