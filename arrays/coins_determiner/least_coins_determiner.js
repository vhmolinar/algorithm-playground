/**
 * Determine the least coins necessary to sum up to the value of num
 *
 * Consider the following possible values for the coins: 1, 5, 7, 9 and 11
 *
 * @param {number} num From 1 to 250
 * @returns {number} The least number of coins
 */
function leastCoinsDeterminer(num) {
  const coins = [1, 5, 7, 9, 11];

  let leastNCoins = 0;
  let remainingDiff = num;

  let pointer = coins.length - 1;
  while (remainingDiff > 0) {
    const pointerValue = coins[pointer];

    if (pointerValue > remainingDiff) {
      pointer -= 1;
      continue;
    }

    leastNCoins += 1;
    remainingDiff -= pointerValue;
  }

  return leastNCoins;
}


console.log(leastCoinsDeterminer(6));

console.log(leastCoinsDeterminer(16));

console.log(leastCoinsDeterminer(51));

console.log(leastCoinsDeterminer(99));

console.log(leastCoinsDeterminer(100));

