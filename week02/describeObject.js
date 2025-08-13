/*อ.บอกใครไม่คล่องเรื่อง obj ให้ดูไฟล์อันนี้จะเข้าใจ */
/*หลักการนี้ใช้ได้ทั้งกับ obj, arr */
/*การเปรียบเทียบ obj */
const std1 = { id: 1, name: "Somchai" }
const std2 = { id: 1, name: "Somchai" }

console.log(std1 == std2)
console.log(std1 === std2)
console.log(Object.is(std1, std2))

/*(ดูรูปใน tablet) std1 กับ std2 ไม่ได้เก็บ key, value เเต่มันเก็บ reference ไปยัง memory address ก็คือตัวมันไม่ได้เก็บค่า key, value โดยตรง มันเลย false หมด*/
function dosomethings(obj) {
    obj.name = 'xxx'
};
const pet = {id: 1, name: 'yoyo'}
console.log(pet.name)
dosomethings(pet) //pet อันนี้ส่ง reference ไปที่ obj ตรงนี้ dosomethings(obj) มันก็จะทำการเเก้ใน memory จาก yoyo เป็น xxx
console.log(pet.name) //พอ print ออกมาดูกลายเป็น xxx


function dosomethings2(obj2) {
    obj2 = {id:1, name: "yoyo"}//(จารย์เพิ่มตอนหลัง)การใส่บรรทัดนี้เข้ามาด้วยจะส่งผลให้คำตอบเปลี่ยน  *test จารย์ถามแบบนี้ เช่นส่งผลต่อ flow มั้ย, memory เปลี่ยนมั้ย*
    obj2.name = 'xxx'
};
const pet2 = {id: 1, name: 'yoyo'}
console.log(pet2.name)
dosomethings2(pet2) 
console.log(pet2.name) //พอเพิ่มบรรทัดนั้นเข้ามาจะทำให้ output กลายมาเป็น yoyo
//สื่อให้เห็นว่าถ้าเราให้กุญแจห้องเพื่อน เพื่อนก้จะมีสิทธิ์เข้ามาในห้องเราตลอด

//แบบ 2 Manual Comparison 


//โจทย์
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


console.log(compareStudent(stu1, stu2));
console.log(compareStudent(stu1, stu3));
