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
console.log("====================================================")


/* Challenge: Student Management with indexOf vs findIndex
ให้ array ของนักเรียน:
const students = [
  { id: 101, name: "Alice", scores: [80, 90, 85] },
  { id: 102, name: "Bob", scores: [60, 70, 75] },
  { id: 103, name: "Charlie", scores: [88, 92, 95] },
  { id: 104, name: "Dana", scores: [50, 40, 55] }
];
Task:
1. ใช้ map ดึง เฉพาะชื่อ ออกมาเป็น array ของ string เช่น ["Alice", "Bob", "Charlie", "Dana"]
แล้วใช้ indexOf("Charlie") หา index ของ "Charlie"
2. ใช้ findIndex() หา index ของ student ที่มี average score < 60 (คือคนที่สอบตก)
3. ใช้ findIndex() หา index ของ student ที่ id === 103 แล้ว update ชื่อจาก "Charlie" → "Charles"
4. ถ้า search ไม่เจอ (เช่นหา "Eve") ให้ return -1 เหมือนกัน

How to test 
console.log("Index of 'Charlie' using indexOf:", idxCharlie);  
console.log("Index of first student with avg score < 60:", idxFail);
console.log("Updated students:", students);
console.log("Index of 'Eve':", idxEve);

Expected Output
Index of 'Charlie' using indexOf: 2
Index of first student with avg score < 60: 3
Updated students: [
  { id: 101, name: 'Alice', scores: [ 80, 90, 85 ] },
  { id: 102, name: 'Bob', scores: [ 60, 70, 75 ] },
  { id: 103, name: 'Charles', scores: [ 88, 92, 95 ] },
  { id: 104, name: 'Dana', scores: [ 50, 40, 55 ] }
]
Index of 'Eve': -1

*/
const students = [
  { id: 101, name: "Alice", scores: [80, 90, 85] },
  { id: 102, name: "Bob", scores: [60, 70, 75] },
  { id: 103, name: "Charlie", scores: [88, 92, 95] },
  { id: 104, name: "Dana", scores: [50, 40, 55] }
];
//1
const names = students.map(s => s.name);
const idxCharlie = names.indexOf("Charlie");
console.log("Index of 'Charlie' using indexOf:", idxCharlie);

// 2. 
const idxFail = students.findIndex(s => {
  const avg = s.scores.reduce((sum, sc) => sum + sc, 0) / s.scores.length;
  return avg < 60;
});
console.log("Index of first student with avg score < 60:", idxFail);

// 3. 
const idxCharlieId = students.findIndex(s => s.id === 103);
if (idxCharlieId !== -1) {
  students[idxCharlieId].name = "Charles";
}
console.log("Updated students:", students);

// 4. 
const idxEve = names.indexOf("Eve");
console.log("Index of 'Eve':", idxEve);