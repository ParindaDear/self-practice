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
console.log(student); //{ id: 672044, fullname: { firstname: 'Parinda', lastname: 'lert' } }

//object ที่สามารถมี value ที่ไม่ใช่ string
const myStudent = {
  name: "Bob",  // string
  age: 20,  //number
  isStudent: true , //boolean
  brain : null, //null
  fruits: ['blueberry', 'cherry'], //array
  hello: function() {return "Hello"},  //เราสามารถเก็บ function ใน obj ได้ ***
  bye(){return "Bye"} //เขียนย่อๆแบบนี้ไปก็ได้เป็นการยุบ syntax
};
console.log(myStudent);

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

//การสร้าง obj แบบที่ 1 object literal
const per1 = {firstname: "Parinda", lastname: "Lert"}

//การสร้าง obj แบบที่ 2 constructor function
function Person(first, last, age){
    this.firstName = first; //first คือ parameter(เป็น set ของ parameter ที่เราต้องการส่งเข้ามา)
                            // ส่วน firstName คือ property ของ obj เพราะมันนำหน้าด้วย this. ซึ่งมันจะกลายไปเป็น data ของ obj
    this.lastName = last;
    this.age = age;
}
const me = new Person('Parinda','Lert', 20)
const you = new Person('GiGi', 'Hadid', 30)
console.log(me)  //Person { firstName: 'Parinda', lastName: 'Lert', age: 20 }
console.log(you) //Person { firstName: 'GiGi', lastName: 'Hadid', age: 30 }
console.log(you.firstName) //GiGi
console.log(you.first) //undefined

// การสร้าง obj แบบที่ 3 ES6 Classes ดีกว่าแบบ 2,1
// เขียน class ที่มีอย่างน้อย 1 obj
class Person1 {
    constructor(first, last, age){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }
}
const jacky = new Person1('Jack', 'ky', 19)
console.log(jacky); //Person1 { first: 'Jack', last: 'ky', age: 19 }

//แบบที่ 4 Object.create(existing obj)
//ให้เราลองสร้าง Student ที่มีโครงสร้างของ Person1
const jackyStudent = Object.create(jacky) //ต้องอ้างชื่อ obj ที่มีอยู่
console.log(jackyStudent.firstName) // Jack
console.log(jackyStudent.lastName) // ky
console.log(jackyStudent.age) // 19

// เราสามารถเพิ่ม Property เข้าไปได้
jackyStudent.studentId = 6713050020 
console.log(jackyStudent) // Person1 { studentId: 6713050020 }


// การ loop Object Literal
const per3 = {firstName: "Parinda", lastName: "Lert", age: 20}
console.log(per3.firstName) //Parinda
console.log(per3["firstName"]) //Parinda


// for...in ใช้สำหรับวน loop Object
for (const key in per3) {
    console.log("1.", key) 
    console.log("2.", per3[key])
    console.log("3.", per3.key)
    console.log("4.", per3["key"])

}

//การเรียก value ทำได้ 2 แบบ
console.log(per3.firstName) //Parinda  //เขียนการเรียก value เเบบ object.property
console.log(per3["lastName"]) //Lert  //เขียนการเรียก value เเบบ object["property"]

