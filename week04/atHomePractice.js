/*Given the array of numbers:
[5, 10, 15, 20, 25, 30]
Filter out only the even numbers.
Multiply each remaining number by 3.
(Extra challenge) Find the total sum of the transformed numbers using reduce().
Example Output
    console.log("Even numbers:", evens);      Even numbers: [10, 20, 30]
    console.log("After *3:", multiplied);     After *3: [30, 60, 90]
    console.log("Total sum:", total);         Total sum: 180 */
const numbers = [5, 10, 15, 20, 25, 30];

// 1.
const evens = numbers.filter(num => num % 2 === 0);
// 2.
const multiplied = evens.map(num => num * 3);
// 3.
const total = multiplied.reduce((acc, num) => acc + num, 0);

console.log("Even numbers:", evens);       
console.log("After *3:", multiplied);     
console.log("Total sum:", total);  
console.log ("========================================")      


/*Given the object:
const students = {
  Ann: 80,
  Bob: 65,
  Charlie: 90,
};
Use forEach() (after converting the object into an array with Object.entries) to print the following:
    Ann has 80 points
    Bob has 65 points
    Charlie has 90 points */
const students = {
  Ann: 80,
  Bob: 65,
  Charlie: 90,
};
const entries = Object.entries(students); // แปลง object เป็น array ของ [key, value]

entries.forEach(([name, score]) => {
  console.log(`${name} has ${score} points`);
});
console.log ("========================================")      

/*Challenge: Mix Methods
ให้ array ของสินค้า:
  const products = [
    { name: "Book", price: 120 },
    { name: "Pen", price: 15 },
    { name: "Bag", price: 300 },
    { name: "Pencil", price: 5 },
    { name: "Notebook", price: 60 },
  ];
1. กรองสินค้าที่ราคา > 50
2. แปลงชื่อสินค้าให้เป็นตัวพิมพ์ใหญ่ทั้งหมด
3. หาผลรวมราคาสินค้าเหล่านั้น 
Example Output
  [
    { name: "BOOK", price: 120 },
    { name: "BAG", price: 300 },
    { name: "NOTEBOOK", price: 60 }
  ]
  Total Price: 480
*/
const products = [
  { name: "Book", price: 120 },
  { name: "Pen", price: 15 },
  { name: "Bag", price: 300 },
  { name: "Pencil", price: 5 },
  { name: "Notebook", price: 60 },
];
// 1.
const filtered = products.filter(item => item.price > 50);

// 2.
const uppercased = filtered.map(item => ({
  name: item.name.toUpperCase(),
  price: item.price
}));

// 3. 
const totalPrice = uppercased.reduce((sum, item) => sum + item.price, 0);

console.log(uppercased);
console.log("Total Price:", totalPrice);
console.log ("========================================")      

/*โจทย์ ให้ array ซ้อนกัน:
const arr = [[1, 2], [3, 4], [5, 6]];
ใช้ reduce() แปลงให้เป็น array เดียว: [1, 2, 3, 4, 5, 6] */
const arr = [[1, 2], [3, 4], [5, 6]];
const merged = arr.reduce((acc, cur) => acc.concat(cur), []);
console.log(merged);
console.log ("========================================")      

/*ให้ array: const number = [3, 7, 10, 12, 15, 20, 25];
Task:
  กรองเอาเฉพาะเลขที่หาร 5 ลงตัว
  คูณเลขที่เหลือทุกตัวด้วย 2
  หาผลรวมของตัวเลขทั้งหมด */
const number = [3, 7, 10, 12, 15, 20, 25];

const result = number
  .filter(n => n % 5 === 0)  
  .map(n => n * 2)            
  .reduce((sum, n) => sum + n, 0);  
console.log(result);
console.log ("========================================")      

/* คุณมี array ของนักเรียน แต่ละคนมี คะแนนสอบ 3 วิชา
const students1 = [
  { name: "Alice", math: 80, english: 70, science: 90 },
  { name: "Bob", math: 60, english: 75, science: 85 },
  { name: "Charlie", math: 90, english: 95, science: 100 },
];
คุณต้องหา คะแนนรวมของนักเรียนทุกคน และบวก โบนัส 5% ให้กับแต่ละคน*/
const students1 = [
  { name: "Alice", math: 80, english: 70, science: 90 },
  { name: "Bob", math: 60, english: 75, science: 85 },
  { name: "Charlie", math: 90, english: 95, science: 100 },
];
const totalScore = students1.reduce(
  (total, student) => total + (student.math + student.english + student.science) * 1.05, 0
);

console.log(totalScore); 
