function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1, c;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}

console.log(fibonacci(10));
