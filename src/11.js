const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function generateMathProblem() {
  const operand1 = getRandomInt(0, 10);
  const operand2 = getRandomInt(0, 10);
  const operator = ["+", "-", "*", "/"][getRandomInt(0, 3)];
  const problemText = `${operand1} ${operator} ${operand2}`;
  return {
    operand1,
    operand2,
    operator,
    problemText,
    solution: eval(`${operand1} ${operator} ${operand2}`),
  };
}
