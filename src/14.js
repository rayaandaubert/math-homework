const { random } = require('mathjs');

function generateRandomNodeJSCode() {
  const code = `
  ${random(1, 10)} + ${random(1, 10)};
  return result;
}
module.exports = generateRandomNodeJSCode;`;
return code;
}
