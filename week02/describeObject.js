/*อ.บอกใครไม่คล่องเรื่อง obj ให้ดูไฟล์อันนี้จะเข้าใจ */
/*หลักการนี้ใช้ได้ทั้งกับ obj, arr */
/*การเปรียบเทียบ obj */
const std1 = { id: 1, name: "Somchai" }
const std2 = { id: 1, name: "Somchai" }

console.log(std1 == std2) //false
console.log(std1 === std2) //false
console.log(Object.is(std1, std2)) //false
/*(ดูรูปใน tablet) std1 กับ std2 ไม่ได้เก็บ key, value เเต่มันเก็บ reference ไปยัง memory address ก็คือตัวมันไม่ได้เก็บค่า key, value โดยตรง มันเลย false หมด*/

//ถ้าเราเขียนบรรทัดนี้เพิ่มไป ปล.ที่คำตอบเป็น true เพราะ std3 = std2 แปลว่า copy address เดียวกันมา
const std3 = std2
console.log(std3 == std2) //true
console.log(std3 === std2) //true

// ถ้าเราเปลี่ยนข้อมูลใน std2 std3 ก็จะเปลี่ยนไปด้วย
std2.name = "Somsak";
console.log(std3.name); //Somsak

// ตัวอย่าง 2 เพิ่มความเข้าใจ
function dosomethings(obj) {
    obj.name = 'xxx'
};
const pet = {id: 1, name: 'yoyo'}
console.log(pet.name) //yoyo

dosomethings(pet) //เรียก func โดยส่ง pet ไป //pet อันนี้ส่ง reference ไปที่ obj ตรงนี้ dosomethings(obj) มันก็จะทำการเเก้ใน memory จาก yoyo เป็น xxx
console.log(pet.name) //xxx

// อัปเกรดตัวอย่าง 2 โดยเพิ่มมา 1 บรรทัด
function dosomethings2(obj2) {
    obj2 = {id:1, name: "yoyo"}//(จารย์เพิ่มตอนหลัง)การใส่บรรทัดนี้เข้ามาด้วยจะส่งผลให้คำตอบเปลี่ยน*test จารย์ถามแบบนี้ เช่นส่งผลต่อ flow มั้ย, memory เปลี่ยนมั้ย*
                               // ทำให้ตอนนี้ obj2 ไม่ชี้ไปยัง pet2 อีกต่อไป แต่สร้าง object ใหม่ใน memory แล้วให้ obj2 ชี้ไป
    obj2.name = 'xxx'
};
const pet2 = {id: 1, name: 'yoyo'}
console.log(pet2.name) //yoyo
dosomethings2(pet2) 
console.log(pet2.name)//yoyo   //พอเพิ่มบรรทัดนั้นเข้ามาจะทำให้ output กลายมาเป็น yoyo
//สื่อให้เห็นว่าถ้าเราให้กุญแจห้องเพื่อน เพื่อนก้จะมีสิทธิ์เข้ามาในห้องเราตลอด

//การเปรียบเทียบ Obj แบบ 2 Manual Comparison 
// จารย์ให้โจทย์ว่า 2 student จะเท่ากันต่อเมื่อ id และ name เท่ากัน
//โจทย์แบบทางการ
/*create compareStudent function to compare two students
if id and name are equally with incase sensitive then they are the same student, otherwise they are different. */
function compareStudent(studentA, studentB){
    const sameId = studentA.id === studentB.id;
    const sameName = studentA.name.toLowerCase() === studentB.name.toLowerCase();
    return sameId && sameName
}
const stu1 = { id: 1, name: "KiKi" };
const stu2 = { id: 2, name: "Sarah"};
const stu3 = { id: 1, name: "KiKi"};

console.log(compareStudent(stu1, stu2)); //false
console.log(compareStudent(stu1, stu3)); //true

//หรือเขียนแบบนี้ก็ได้ (เฉลยอ.)
const st1 = { id: 1, name: "Somchai" }
const st2 = { id: 1, name: "SOMchai" }

console.log(st1 == st2) //false
console.log(st1 === st2) //false
console.log(Object.is(st1, st2)) //false

function compareStudent(st1, st2) {
  if (
    st1.id === st2.id &&
    st1.name.toLowerCase() === st2.name.toLowerCase()
  )
    return true
  else return false
}
console.log(compareStudent(st1, st2)) //true

// Object.keys()
const s1 = { id: 1, name: "Somchai" }
const s2 = { id: 1, name: "SOMchai" }
console.log(Object.keys(s1)) // [ 'id', 'name' ] คือได้ array ของ key 
console.log(Object.values(s1)) // [ 1, 'Somchai' ] คือได้ array ของ value

// Object Destructuring
const em1 = {id: 1, name: "Somchai", address: { no: 111, city: "Bangkok" } }
//สมมติว่าจารย์ต้องการค่า name กับ id จาก object em1 โดยเปลี่ยนชื่อตัวแปร name เป็น fullName
let { name : fullName, id } = em1
console.log(fullName) //Somchai 
console.log(id) // 1

// โจทย์สุดท้าย Destructuring city เเล้วเปลี่ยนเป็น myAddress
const { address: {city : myAddress} } = em1
console.log(myAddress) ///Bangkok