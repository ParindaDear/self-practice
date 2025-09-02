/* โจทย์มี array ของตัวเลข:
const nums = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
เขียน callback function แบบ anonymous เพื่อกรองเลข เฉพาะจำนวนเฉพาะ (prime numbers)
ผลลัพธ์ควรเป็น: [2, 3, 5, 7, 11, 13]
*/
const nums = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const prime = nums.filter( function(num) {
    if (num <= 1) return false;  // เลข <=1 ไม่ใช่ prime
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false; // หารลงตัว แปลว่าไม่ใช่ prime
    }
    return true;
});
console.log(prime)
console.log("=================================")

/*เขียน named function ชื่อ isMorethanFive เพื่อเช็คว่าตัวเลข > 5
โดยทำกับ array [12, 5, 8, 130, 44]
ผลลัพธ์ควรเป็น: [12, 8, 130, 44] */
function isMorethanFive(value) {
    const result1 = value.filter( v => v > 5)
    return result1
}
console.log(isMorethanFive([12, 5, 8, 130, 44]))
console.log("=================================")


/* 💌 เรื่อง forEach() ใช้วนซ้ำแต่ละ element, ไม่คืนค่า */
/*โจทย์แปลงตัวอักษรทั้งหมดเป็นตัวพิมพ์ใหญ่
    มี string "hello world"
    แปลง string ให้เป็น array ของตัวอักษร
    ใช้ forEach() เพื่อวนแต่ละตัวอักษร
    สร้าง string ใหม่ ที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
ตัวอย่างผลลัพธ์: HELLO WORLD */
let letters = [...'hello world'] //การใช้ ... กับ string จะทำให้ได้จะได้ array ของตัวอักษรแต่ละตัว
let uppercase = '';
letters.forEach(char => { //forEach เป็น เมธอดของ arrayจะ วนลูปแต่ละ element ของ array แล้วทำสิ่งที่เรากำหนดใน callback function
    uppercase += char.toUpperCase() //แปลงตัวอักษรปัจจุบันเป็น ตัวพิมพ์ใหญ่ แล้วต่อ string ใหม่เข้าไปกับ uppercase
})
console.log(uppercase)
console.log("=================================")

/*แสดง id ของสินค้าแต่ละชิ้น
    มี array ของ object ชื่อ products ดังนี้
        const products = [
        { id: 123, name: 'bag' },
        { id: 2, name: 'pen' },
        { id: 33, name: 'BAG' }
        ];
    ใช้ forEach() เพื่อวนแต่ละ object
    แสดง id ของสินค้าทุกชิ้น
    ตัวอย่างผลลัพธ์:   123
                    2
                    33
 */
const products = [
    { id: 123, name: 'bag' },
    { id: 2, name: 'pen' },
    { id: 33, name: 'BAG' }
];
products.forEach((product) => console.log(product.id)) //ต้องใส่ console.log เพราะ forEach มันไม่คืนค่า
console.log("=================================")

/* จงกรองคำที่มีความยาวมากกว่า 6 ตัวอักษร จาก
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'] */
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
const result2 = words.filter( word => word.length > 6)
console.log(result2)
console.log("=================================")
