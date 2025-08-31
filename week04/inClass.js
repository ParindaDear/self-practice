// filter 
const w = ["spray", "elite", "exuberant", "destruction", "present"];
const result = w.filter((wo) => wo.length > 6);
console.log(result); // ["exuberant", "destruction", "present"]

//reverse
const words = ["apple", "Mango", "orange", "Banana"]
//words.reverse()
//console.log(words)

// 💌 การเขียน callback function
// ปล word เป็น parameter   word จะมีกี่อันก็เเล้วเเต่ว่ามีเข้ามากี่อัน

//วิธี 1. annonymous function declaration (ใช้ครั้งเดียวทิ้ง)
const startAWords1 = words.filter(function (word) {
    return word.startsWith("a")
})
console.log(startAWords1); //[ 'apple' ]

// วิธี 2. annonymous arrow function  (ใช้ครั้งเดียวทิ้ง)
// const startAWords = words.filter( word => word.startsWith('a') ) //เขียน annonymous function แบบ arrow func
// ปล. ที่เขียน const startAWords เพื่อให้ผลลัพธ์มันออกมาได้เลยต้องเลือกระหว่างจะเก็บมันไว้ในตัวเปร / ครอบ console.log ไปเลย เพราะ filter ไม่ได้เปลี่ยน original array
// console.log(startAWords); //[ 'apple' ]

//วิธี 3. named function declaration (เเบบนี้เรียกมันกลับมาใช้ซ้ำได้อีก)
function checkStartA2(word) {
    return word.startsWith("a")
}
const startAWords3 = words.filter(checkStartA2)
console.log(startAWords3) //[ 'apple' ]

//วิธี 4. named arrow function  (เเบบนี้เรียกมันกลับมาใช้ซ้ำได้อีก)
const checkStartA = (word) => word.startsWith("a")
const startAWords2 = words.filter(checkStartA)
console.log(startAWords2) //[ 'apple' ]




// 💌 forEach()
// จากก่อนหน้านี้ที่เราเขียน callback function วิธี 2. annonymous arrow function 
// ให้เราเเปลงเป็นการเขียนแบบใช้ forEach
const startAWords = []; //เพราะ forEach มันไม่ return เลยเลยต้องสร้างเก็บค่าไว้
words.forEach(word => {
    if(word.startsWith('a')) {
        startAWords.push(word); //เเล้วก็ push เข้าไป
    }
});
console.log(startAWords); //[ 'apple' ]

// 💌 map()
//โจทย์คือจารย์ให้ object นี้มา อยากได้ array ของ fullname ที่เป็น uppercase ทั้งหมด โดยใช้ map แล้วผลตามนี้ [ 'SOMCHAI JAIDEE', 'PORNCHAI DEEJAI', 'SUDA RAKDEE' ]
const employees = [
  {
    id: "e1001",
    firstname: "Somchai",
    lastname: "Jaidee",
  },
  {
    id: "e1002",
    firstname: "Pornchai",
    lastname: "Deejai",
  },
  {
    id: "e1005",
    firstname: "Suda",
    lastname: "Rakdee",
  },
]
 
const fullname = employees.map((employee) => (employee.firstname + " " + employee.lastname).toUpperCase())
                                            //หรือ (employee.firstname.toUpperCase()+' '+employee.lastname.toUpperCase())
console.log(fullname)

//โจทย์ต่อจากเดิมอยากได้ผลลัพธ์ของ fullname ที่มีคำว่า jai
const fullnameJai = fullname.filter(name => name.toLowerCase().includes("jai"))
console.log(fullnameJai) 


/* หรือจะเขียนแบบนี้ก็ได้ ถ้าไม่อิงจาก fullname ที่เขียนโจทย์ก่อนหน้า
const fullnameWithJai = employees
  .map(emp => `${emp.firstname} ${emp.lastname}`.toUpperCase())
  .filter(name => name.toLowerCase().includes("jai"));
console.log(fullnameWithJai); */


//จงหา net price ใช้ reduce
//net price = total price * VAT 7%
const carts = [
  { productId: 1002, price: 10, amount: 5 },
  { productId: 2005, price: 100, amount: 2 },
  { productId: 5001, price: 5, amount: 4 },
]
const netPrice = carts.reduce(
    (total, product) => total +  (product.price * product.amount) * 1.07 ,0) //0คือ initial value ต้องใส่เพนาะโจทย์ข้อนี้มันไม่รู้ว่าจะเอาเลขไหนมาตั้งต้นให้ ไม่งั้นผลจะเป็น NaN
console.log(netPrice)

/* จารย์เฉลยแบบนี้
const totalPrice = carts.reduce(
  (total, product) => total + product.price * product.amount,
  0
)
const netPrice = totalPrice * 1.07
console.log(netPrice.toFixed(2))
 */

// 💌
const nums = [2, 4, 6]
// nums[nums.length] = 8
console.log(nums.push(8)) //append in the end of array, return new length
console.log(nums)
nums.unshift(10) //add in the beginning of array
console.log(nums)
nums.pop() //remove in the end of array
console.log(nums)
nums.shift() //remove in the beginning of array
console.log(nums)

//💌 splice()
const wordsfr = ["apple", "orange", "banana"]

// เรื่องการ add
//(ตำแหน่ง index ที่ต้องการเริ่ม add, จำนวน item ที่ต้องการจะลบเเต่ในการ add จะใส่เป็น 0, ค่าที่จะ add ใส่ไป....)
wordsfr.splice(2, 0, "cherry", "berry")
console.log(wordsfr) //[ 'apple', 'orange', 'cherry', 'berry', 'banana' ]

//เรื่องการ delete
//(ตำแหน่ง index ที่ต้องการเริ่ม delete, จำนวน item ที่ต้องการจะลบ, ค่าที่จะ delete ....)
wordsfr.splice(2, 1)
console.log(wordsfr) //[ 'apple', 'orange', 'berry', 'banana' ]

//เรื่องกาาร replace
//(ตำแหน่ง index ที่ต้องการเริ่ม replace, จำนวน item ที่ต้องการจะลบ, ค่าที่จะ replace ใส่ไป ....)
wordsfr.splice(2, 1, "mango")
console.log(wordsfr) //[ 'apple', 'orange', 'mango', 'banana' ]

//💌 slice
const words1 = ["apple", "orange", "banana", "mango", "cherry"]

console.log(words1.slice(1)) // ["orange", "banana", "mango", "cherry"]   ใส่ตัวเดียวคือเอาจนจบเลย
console.log(words1.slice(0, 3)) //["apple", "orange", "banana"]
console.log(words1.slice(2, 5)) // ["banana", "mango", "cherry"]
console.log(words1.slice(2)) // ["banana", "mango", "cherry"]
console.log(words1.slice(-3)) // ["banana", "mango", "cherry"]



 
