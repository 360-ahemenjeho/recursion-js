function fib(n) {
  let seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq = [...seq, seq[i - 1] + seq[i - 2]];
  }
  return seq;
}

console.log("fib of 8: ", fib(8));
function fibRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const prev = fibRec(n - 1);
  return [...prev, prev[prev.length - 1] + prev[prev.length - 2]];
}
console.log("fib (rec) of 8: ", fibRec(8));
