// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if (currency > 10000) {
    return { error: "You are rich, my friend! We don't have so much coins for exchange"}
  }

  const coinsCost = {
    H: 50,
    Q: 25,
    D: 10,
    N: 5,
    P: 1,
  };
  const change = {};
  for (coinType in coinsCost) {
    const integerAmount = Math.floor(currency / coinsCost[coinType]);
    if (integerAmount >= 1) {
      change[coinType] = integerAmount;
      currency = currency - (integerAmount * coinsCost[coinType]);
    }
  }
  return change;
}
