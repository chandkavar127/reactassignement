const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 800 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 12000 },
  { name: "Printer", price: 9000 },
];

const expensiveProducts = products.filter(({ price }) => price > 5000);
const productNames = products.map(({ name }) => name);
const totalPrice = products.reduce((total, { price }) => total + price, 0);

console.log(`Products costing more than ₹5,000: ${expensiveProducts.map(({ name }) => name).join(", ")}`);
console.log(`Product names: ${productNames.join(", ")}`);
console.log(`Total price: ₹${totalPrice}`);
