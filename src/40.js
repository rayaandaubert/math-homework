function getRandomNumber(min, max) {
  min = Math.ceil(Math.random() * (max - min + 1)) + min;
  return min;
}
