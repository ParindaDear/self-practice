const carts = [
  { productId: 1002, price: 10, amount: 5 },
  { productId: 2005, price: 100, amount: 2 },
  { productId: 5001, price: 5, amount: 4 },
]
const netPrice = carts.reduce((total,{price, amount}) => total+=price*amount,0) * 1.07;
console.log(netPrice)