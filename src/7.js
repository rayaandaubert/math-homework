const {random} = require('math-homework');

function getRandomNodejsCode() {
  const mathProblem = `The value of ${random(1, 10)} x ${random(1, 10)} is equal to`;
  const answer = random(1, 10) * random(1, 10);
  return `${mathProblem} ${answer}`;
}
