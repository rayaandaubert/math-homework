function getRandomInt(max) {
  var max = max > 0 ? max : Math.floor(Math.random() * (max - 1 + 1)) + 1;
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(5) + " or " + getRandomInt(3));
