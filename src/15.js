const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const generateRandomNodejsCode = () => {
  const randomNumber = getRandomInt(100000);
  return `console.log('Random number: ${randomNumber}`;
}
