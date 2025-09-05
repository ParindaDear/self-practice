/*Challenge: Complex Array + Object Operations 
โจทย์: ให้ array ของ object products:
const products = [
  { name: "Book", price: 120, category: "Education" },
  { name: "Pen", price: 15, category: "Stationery" },
  { name: "Bag", price: 300, category: "Fashion" },
  { name: "Pencil", price: 5, category: "Stationery" },
  { name: "Notebook", price: 60, category: "Education" },
  { name: "Shoes", price: 500, category: "Fashion" }
];

Task:
1. ตรวจสอบว่า products เป็น array หรือไม่ (Array.isArray)
2. กรองเฉพาะสินค้าที่ price > 50
3. แปลง name ของสินค้าทั้งหมดให้เป็นตัวพิมพ์ใหญ่
4. จัดเรียงสินค้า ตาม category (A-Z)
5. สร้าง array ของ ชื่อสินค้า (name)
6. หา ราคาสินค้ารวม ของสินค้าที่ผ่าน filter 

ทดสอบโดย
console.log("Products after filter & uppercase & sort by category:", sorted);
console.log("Array of product names:", productNames);
console.log("Total price:", totalPrice);

Expected Output:
Is products an array? true
Products after filter & uppercase & sort by category: [
  { name: "BOOK", price: 120, category: "Education" },
  { name: "NOTEBOOK", price: 60, category: "Education" },
  { name: "BAG", price: 300, category: "Fashion" },
  { name: "SHOES", price: 500, category: "Fashion" }
]
Array of product names: ["BOOK", "NOTEBOOK", "BAG", "SHOES"]
Total price: 980  */

const products = [
  { name: "Book", price: 120, category: "Education" },
  { name: "Pen", price: 15, category: "Stationery" },
  { name: "Bag", price: 300, category: "Fashion" },
  { name: "Pencil", price: 5, category: "Stationery" },
  { name: "Notebook", price: 60, category: "Education" },
  { name: "Shoes", price: 500, category: "Fashion" }
];

// 1. 
console.log("Is products an array?", Array.isArray(products)); // true

// 2. 
const filtered = products.filter(p => p.price > 50);

// 3. 
const uppercased = filtered.map(p => ({
  ...p,
  name: p.name.toUpperCase()
}));

// 4. 
const sorted = uppercased.sort((a, b) => a.category.localeCompare(b.category));

// 5. 
const productNames = sorted.map(p => p.name);

// 6. 
const totalPrice = sorted.reduce((sum, p) => sum + p.price, 0);

console.log("Products after filter & uppercase & sort by category:", sorted);
console.log("Array of product names:", productNames);
console.log("Total price:", totalPrice);