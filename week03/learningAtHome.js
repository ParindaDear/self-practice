// 💌 ส่ง Function ไปเป็น Parameter 
function superNatural(name, powerFunc){
    return powerFunc(name);
}

function vampire(vName){
    return  "I'm " + vName + ", a vampire from Cullen Family.";  
}

function werewolf(wName){
    return "I'm " + wName + ", a werewolf from Blackwood";
}

console.log(superNatural("Bella", vampire)) //I'm Bella, a vampire from Cullen Family.
console.log(superNatural("Jacob", werewolf)) //I'm Jacob, a werewolf from Blackwood
console.log("==============================================")



// 💌 func ซ้อน func (Nested Function + Closure)
function encounterVampire() {
    let count = 0;

    function meet() {
        count++;
        return `It's the ${count} times that she has met a vampire.`;
    }
    return meet;
}

const bellaEncounters = encounterVampire();

console.log(bellaEncounters());  //It's the 1 times that she has met a vampire.
console.log(bellaEncounters());  //It's the 2 times that she has met a vampire.
console.log(bellaEncounters());  //It's the 3 times that she has met a vampire.
console.log("==============================================")

/*
encounterVampire() = outer function
meet() = inner function
bellaEncounters = closure ที่ จดจำค่า count แม้ว่า encounterVampire() ถูกเรียกไปแล้ว
*/

// 💌 Primitive Parameters: Passed by Value
//Primitive Types ได้แก่: number, string, boolean, null, undefined, symbol, bigint
//คือเมื่อส่ง primitive เข้าไปในฟังก์ชัน → ค่าจะถูกคัดลอก (pass by value)
function jumpSquare(n){
    n = n + 1;  // เปลี่ยนค่าใน func
    return n * n;
}

let testMe = 2 ; 
console.log(jumpSquare(testMe)); //9
console.log(testMe) //2 //การเปลี่ยนค่าภายในฟังก์ชัน จะไม่กระทบตัวแปรภายนอก
console.log("==============================================")

// 💌 Object Parameters: Passed by Reference
//Object types ได้แก่: Object, Array, Function
//เมื่อส่ง object เข้าไปในฟังก์ชัน → ตัวแปรฟังก์ชันจะชี้ไปยัง object ตัวเดียวกัน
//การเปลี่ยน properties ของ object ในฟังก์ชัน → เปลี่ยนค่าต้นฉบับภายนอกด้วย
function rename(person) {
    person.name = "Edward";
}

const bella = {name : "Bella"};

console.log(bella.name); //Bella
rename(bella);  // ส่ง object เข้าไปในฟังก์ชัน
console.log(bella.name); //Edward
console.log("==============================================")

// 💌 เรื่อง arguments object
// เขียนเเบบ function ธรรมดาใช้ arguements
function introduceVampires() {
    console.log("Amount of Vampire: ", arguments.length); //จะไม่ใช้คำว่า arguements ก็ได้ มันมาจากเบื้อล่าง
    for (let i = 0; i < arguments.length; i++){
        console.log("Vampire: ", arguments[i]);
    }
}

introduceVampires("Cullen", "Alice", "Rose");

// เขียนแบบ Arrow Function 
const listOfVampire = (...args) => {
    console.log("List of Vampire: ", args.length);

    for (let i = 0; i < args.length; i++){
        console.log("Vampire: ", args[i])
    }
};
listOfVampire("Cullen", "Alice", "Rose")
console.log("==============================================")

// 💌 func ที่มีหลาย parameter เเละมีการกำหรด default ให้ parameter ด้วย
function greet(name = 'Guest', age = 20){
    return "Hello, " + name + ", Age " + age ; 
}

console.log(greet()) //Hello, Guest, Age 20
console.log(greet('James')) //Hello, James, Age 20
console.log(greet('James', 35)) //Hello, James, Age 35

// 💌 Rest Parameters
// 1. ฟังก์ชันใช้ Rest Parameters
function vampirePower(...args){
    for (const i of args) {
        console.log(i.name + " has power: " + i.power);
    }
}
const edward = { name: "Edward", power: "Mind Reading" };
const alice = { name: "Alice", power: "Future Vision" };
const jasper = { name: "Jasper", power: "Emotion control" };
vampirePower(edward, alice, jasper);
console.log("==============================================")

// 2. ใช้กับ Array Methods
function calculateTotalPower(...args){
    return args.reduce((total,i) => total + i.power, 0);
}
const edward1 = { name: "Edward", power: 90 };
const alice1 = { name: "Alice", power: 80 };
const jasper1 = { name: "Jasper", power: 70 };
console.log(calculateTotalPower(edward1, alice1, jasper1))
console.log("==============================================")

// 💌 Spread Operator
// 1.ใช้เบบธรรมดา
function sum(n1, n2, n3) {
    return n1 + n2 + n3;
}
let nums = [5, 20, 15];
console.log(sum(...nums));
//ก็คือ ...nums → กระจายเป็น 5, 20, 15 → ตรงกับ parameter n1, n2, n3

// 2.ใช้กับ array 
let arr1 = [1, 2];
let arr2 = [3, 4];

let merge = [...arr1, ...arr2]; // รวม array ด้วย spread
console.log(merge); //ข้อนี้ออกสอบ เขียนบรรทัดเดียวเฟี้ยวๆ*****************************************************

// (อื่นๆ) 3. ใช้กับ function arguments
function multiply(x, y, z) {
  return x * y * z;
}
let numbers = [2, 3, 4];
console.log(multiply(...numbers)); 
console.log("==============================================")



// 💌 Destructuring Parameters
// 1. Destructuring Array
// แยก element แรกจากแต่ละ array
function sumFirstPower([p1], [p2]) {
  return p1 + p2;
}
const edwardPowers = [10, 20];
const alicePowers = [5, 15];
console.log(sumFirstPower(edwardPowers, alicePowers)); 
    // Output: 15 → 10 + 5
    // [p1] → เอา element แรกของ array แรก (Edward)
    // [p2] → เอา element แรกของ array ที่สอง (Alice)

// 2. Destructuring Array หลาย element
function totalPower([e1, e2], [a1, a2]) {
  return e1 + e2 + a1 + a2;
}
console.log(totalPower([10, 20], [5, 15])); 
    // Output: 50 → 10+20+5+15
    // [e1, e2] → แยก power ของ Edward
    // [a1, a2] → แยก power ของ Alice

// 3. คืนค่าเป็น array หลังรวม element
function arrayAdd3([x1, y1], [x2, y2]) {
  return [x1 + x2, y1 + y2];
}

const x = [1, 2];
const y = [3, 4];
console.log(arrayAdd3(x, y)); // [4, 6]

// (GPT แถม) 4. Destructuring Object
// สมมติเราเก็บ ข้อมูลตัวละคร เป็น object
function showVampire({name, power}) {
  return `${name} has power ${power}`;
}
const edward2 = { name: "Edward", power: "Mind Reading" };
console.log(showVampire(edward2));
    // Output: Edward has power Mind Reading
    // {name, power} → แยก property ของ object ออกเป็นตัวแปร
    // ไม่ต้องใช้ edward.name หรือ edward.power

// (GPT แถม) 5. Destructuring Object + Array
function combineVampireInfo({name, power}, [p1, p2]) {
  return `${name} has power ${power}, and the amount of power is ${p1 + p2}`;
}
console.log(combineVampireInfo(edward2, [10, 5]));
// Output: Edward has power Mind Reading, and the amount of power is 15
console.log("==============================================")



// 💌 Object Destructuring Parameters
// 1.แยก property ง่าย ๆ
const students = {
    studentId: 64001,
    displayName:  'lnwza007',
    fullName: {
        firstName: 'Sompong',
        lastName: 'Uhauha'
    }
};

function studentId({ studentId })  {
    return studentId;
}
console.log(studentId(students))
// { studentId } → แยก property studentId ออกมาเป็น ตัวแปร studentId
// ใช้ได้ทันทีโดยไม่ต้องเขียน students.studentId

// 2. แยกหลาย property พร้อม nested object
function getFullName({ fullName: { firstName, lastName } }) {
  return firstName + " " + lastName ;
}
console.log(getFullName(students)); 
console.log("==============================================")
// fullName: { firstName, lastName } → unpack nested object
// สามารถเข้าถึง nested properties ได้โดยตรง


// 💌 Nested Object Destructuring
const students1 = {
  studentId: 64001,
  displayName: 'jsGuy',
  fullName: {
    firstName: 'Somchai',
    lastName: 'DeeJai'
  }
};

function getFirstName({ displayName, fullName: { firstName } }) {
  return `${displayName} is ${firstName}`;
}
console.log(getFirstName(students1)); 
// { displayName, fullName: { firstName } } → unpack property displayName และ nested property fullName.firstName
// ใช้ได้ทันทีโดยไม่ต้องเขียน students.displayName หรือ students.fullName.firstName
console.log("==============================================")


// 💌 Combined Array & Object Destructuring
const person = [
  { id: 1, name: 'Suda' },
  { id: 2, name: 'Surapong' },
  { id: 3, name: 'Somchai' }
];

function getPersonName([, { name }]) {
    return name;
}
console.log(getPersonName(person))