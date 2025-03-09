// Get a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Generate a random math problem
function generateProblem() {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
  return `${num1} ${operator} ${num2}`;
}

// Get the answer to a math problem
function solveProblem(problem) {
  const [num1, operator, num2] = problem.split(' ');
  let result = 0;
  if (operator === '+') {
    result = parseInt(num1) + parseInt(num2);
  } else if (operator === '-') {
    result = parseInt(num1) - parseInt(num2);
  } else if (operator === '*') {
    result = parseInt(num1) * parseInt(num2);
  } else if (operator === '/') {
    result = parseInt(num1) / parseInt(num2);
  }
  return result;
}

// Test the math problem solver
const problem = generateProblem();
console.log(`Problem: ${problem}`);
console.log(`Solution: ${solveProblem(problem)}`);
