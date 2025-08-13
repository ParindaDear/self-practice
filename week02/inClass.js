/*Practice 2 
Write a JavaScript function calculateTotalPages(items, itemsPerPage) that takes two parameters:
    items (number): The total number of items.
    itemsPerPage (number): The maximum number of items allowed per page.
The function should return the total number of pages needed to accommodate all the items. 
If no item or itemsPerPage is 0 or a negative value, the function should throw an error since a page must be able to contain at least one item.
Output:
    calculateTotalPages(10, 3) // 4
    calculateTotalPages(25, 5) // 5
    calculateTotalPages(0, 5) // 0
    calculateTotalPages(10, 10) // 1
    calculateTotalPages(10, 0) //throw Error('Items per page must be greater than zero.')
*/
/*function calculateTotalPages(items, itemsPerPages){
    if (itemsPerPages <= 0){
        throw new Error('Items per page must be greater than zero.') 
    }
    if (items === 0){
        return 0;
    }
    return Math.ceil(items / itemsPerPages); //Math.ceil()ใช้ปัดขึ้น
}
console.log(calculateTotalPages(10, 3));
console.log(calculateTotalPages(25, 5));
console.log(calculateTotalPages(0, 5));
console.log(calculateTotalPages(10, 10));
console.log(calculateTotalPages(10, 0)); */

/* หรือจะเขียนแบบนี้ก็ได้
function calculateTotalPages(items, itemsPerPages) {
    if (itemsPerPages <= 0 || items < 0) {
        throw new Error("items per page must be greater than zero");
    }
    return Math.ceil(items / itemsPerPages);
}
*/

/*เรียนต่อเรื่อง Object */
//object สามารถใช้ key ซ้ำได้ เเต่ก็ไม่ควร!!! เพราถ้า key ซ้ำมันจะเอา value ตัวสุดท้าย
const book = {stdn: 1353, stdn:7904}

//object เป็น composite value คือ obj ซ้อน obj ได้
const student = {
    id: 672044,
    fullname: {
        firstname: 'Parinda',
        lastname: 'lert'
    }
}
console.log(student);

//object ที่สามารถมี value ที่ไม่ใช่ string
const professor = {
  name: "Bob",  // string
  age: 20,  //number
  isStudent: true , //boolean
  brain : null, //null
  fruits: ['blueberry', 'cherry'], //array
  hello: function() {return "Hello"},  //เราสามารถเก็บ function ใน obj ได้ ***
  bye(){return "Bye"} //เขียนย่อๆแบบนี้ไปก็ได้เป็นการยุบ syntax
};
console.log(professor);

// ตัวอย่างเพิ่มจากเพิื่อน
const pets = {
    cat: {
        name: "Mongkol",
        hello: function() {return "Hello"}
    }
}
console.log(pets.cat.name) //อยากให้มัน print name
console.log(pets.cat.hello()) //อยากให้ print คำว่า hello

//obj เป็น dynamic คือเราสามารถเพิ่มค่าเข้าไปเพิ่มได้/ลบก็ได้
//JavaScript objects are dynamic—properties can usually be added and deleted
pets.dog = {name: 'abc'}
console.log(pets)

delete pets.dog
console.log(pets)

function Student(name, age) {
  this.name = name;
  this.age = age;
}
const s1 = new Student('Alice', 25);

//implicit คือเราไม่ต้องสร้าง class template ถึงจะไปสร้าง obj ก็คือไม่ต้องมีระเบียบเหมือน java
//It is possible to create an instance of an “implicit” class without the need to create the class.

//การสร้าง obj แบบที่ 1 object literal
const per1 = {firstname: "Parinda", lastname: "Lert"}

//การสร้าง obj แบบที่ 2 constructor function
function Car(first, last, age){
    this.firstName = first; //first คือ parameter(เป็น set ของ parameter ที่เราต้องการส่งเข้ามา) ส่วน firstName คือ property ของ obj เพราะมันนำหน้าด้วย this. ซึ่งมันจะกลายไปเป็น data ของ obj
    this.lastName = last;
    this.age = age;
}
const me = new Car('Ann','EiEiEi', 30)
const you = new Car('GiGi', 'UeUi', 20)
console.log(me)
console.log(you)


// การสร้าง obj แบบที่ 3 ES6 Classes ดีกว่าแบบ 2,1
// เขียน class ที่มีอย่างน้อย 1 obj
class Person {
    constructor(first, last, age){
        this.first = first;
        this.last = last;
        this.age = age;
    }
}
const dearly = new Person('Parinda', 'Lert', 20)
console.log(dearly);

//แบบที่ 4 Object.create()
const dearlyStudent = Object.create(dearly)
console.log(dearlyStudent.first)
console.log(dearlyStudent.last)
console.log(dearlyStudent.age)
dearlyStudent.studentId = 6713050020
console.log(dearlyStudent)
