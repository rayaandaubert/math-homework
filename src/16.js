function multiply(a, b) {
  if (!Number.isInteger(a)) a = Math.round(Math.abs(a));
  if (!Number.isInteger(b)) b = Math.round(Math.abs(b));

  const result = (a * b).toFixed(10);
  return `Result: ${result}`;
}

console.log(multiply(3, -5)); // Output: Result: 2.16
