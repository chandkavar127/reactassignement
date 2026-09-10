function calculateTotal(discount = 10, ...prices) {
  const total = prices.reduce((sum, price) => sum + price, 0);
  return total - (total * discount) / 100;
}

const firstPrices = [50000, 800, 1500];
const secondPrices = [12000, 9000];
const allPrices = [...firstPrices, ...secondPrices];

const finalAmount = calculateTotal(undefined, ...allPrices);

console.log(`Prices: ${allPrices.join(", ")}`);
console.log(`Final amount after the default 10% discount: ₹${finalAmount.toFixed(2)}`);
