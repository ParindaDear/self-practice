/*Array.isArray() */
console.log(Array.isArray([])) //true
console.log(Array.isArray(['a', 12, false])) //true
console.log(Array.isArray([new Array(2)])) //true

console.log(Array.isArray("[]")) //false
console.log(Array.isArray(123)) //false
console.log(Array.isArray(false)) //false
console.log(Array.isArray("1")) //false
console.log(Array.isArray({})) //false

/* จง merge array */
const num1 = [1, 2, 3]
const num2 = [3, 5, 7]
console.log([...num1, ...num2]) /* วิธี 1 spread */
console.log(num1.concat(num2)) /* วิธี 2 concat */

/*เปลี่ยน array เป็น string*/
console.log(num1.toString()) /* วีธีใช้ toString() */
console.log(num1.join(",")) /* วีธีใช้ join() */

/*includes ของ String กับ Array ไม่เหมือนกัน
- includes ของ String จะเเค่บางส่วน
- includes ของ Array จะทั้ง items ห้ามส่วนนึงของ item 
****ระวังเรื่อง case sensitive ด้วย */
console.log("mangoteen".includes("go")) //true
console.log("mangoteen".includes("Go")) //false

console.log(["mangoteen", "mango"].includes("go")) //false
console.log(["mangoteen", "mango"].includes("Mango")) //false
console.log(["mangoteen", "mango"].includes("mango")) //true

/*reverse มันเเก้ original array ด้วย */

/* sort 
โดย default sort มันเป็น sort แบบ text & เป็น case sensitive
มันไม่ได้ sort numberic */
// โจทย์คือให้เปลี่ยนจาก default sort ที่ใช้ text เป็น numberic sort  
// โดยเรียงจากมากไปน้อย
const array14 = [1, 30, 4, 21, 100000]
array14.sort((a,b) => a-b).reverse()
console.log(array14)
//a กับ b คือ parameter โดยมันเอาค่ามาจาก array14

//จารย์เฉลย
const array14Aj = [1, 30, 4, 21, 100000]
array14Aj.sort((a,b) => b-a)
console.log(array14Aj)

/*จงเรียง 
เรียงตาม name 
เรียงตามลำดับตัวอักษรโดยไม่สนใจ case */
// sort มันจะทำการเปรียบเทียบ -1 ,0 ,1
 
const students = [
    {id: 66500102, name: "Suda", gpa: 2.5},
    {id: 66500555, name: "ada", gpa: 2.8},
    {id: 66500589, name: "pornchai", gpa: 3.25},
    {id: 66500102, name: "Pornsak", gpa: 3.8},
]
students.sort((a,b)=> a.name.localeCompare(b.name))
console.log(students)
//โดย localeCompare มันเป็น case-insensitive (ไม่สน case)
//localeCompare เป็น   method ของ string มันเป็นการเปรียบเทียบ string ตามภาษาท้องถิ่น ตามที่เราจะระบุ parameter โดยมันจะ default เป็น Eng
//มันจะเปรียบเทียบ string ตามตัวอักษร case-insensitive ได้ถ้าต้องการ


/*findIndex() ต่างกับ indexOf() ยังไง (ใช้อันไหนก็ได้)
- indexOf() จะ return first index ของ element ที่ให้ไว้ โดยถ้าไม่เจอจะ -1
  มันต้องการ parameter ที่เป็น string
- findIndex() ไว้หา index ของ first element
  parameter มันต้องการ callback func ที่ทำหน้าที่ให้ condition
- ความเหมือนคือ output  เเต่ความต่างคือ input parameter  */









