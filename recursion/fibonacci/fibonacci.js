function getNthFib(n, memoize) {
  if (!memoize)
    memoize = {};

  if (memoize[n])
    return memoize[n];

  let calc = 0;
  if (n <= 1)
    calc = 0;
  else if (n == 2)
    calc = 1;
  else
    calc = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);

  memoize[n] = calc;
  return calc;
}

console.assert(getNthFib(6) == 5)
