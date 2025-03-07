// Generate a random number between 1 and 10
function getRandomNumber() {
  const min = 1;
  const max = 10;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get a random integer between 1 and 10
const randomInt = getRandomNumber();
console.log(`The random number is: ${randomInt}`);
