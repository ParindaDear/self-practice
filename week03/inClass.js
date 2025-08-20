//เขียน funtion ที่รับหลาย parameter
function introduce(firstname, lastname) {
    return "Hello, I am " + firstname + " " + lastname;
}
console.log(introduce("Parinda", "Lert")); 
console.log(introduce("Bobby", "TTT"));
console.log(typeof(introduce)) //function  

//1. แบบ1 func Declaration
function sum(a, b) {
    return a + b
}
const x = sum  // sum เอา reference ให้ x ทำให้สามารถเรียกใช้ func โดยใช้ x เเทน sum ได้เหมือนกันเป๊ะ เพราะมันอยู่ห้องเดียวกันเเล้ว
console.log(sum(9,8)); //ปกติเรียกใช้ func แบบนี้
console.log(x(9,8)); //สามารถเขียนแบบนี้ก็ได้ **ข้อสอบออกแบบนี้ มันจะถามว่าได้ค่าไร

// 2. แบบ2 function expression (arrow function)
const sum2 = () => a+b;
/* คำถามคือเราไม่ได้เขียนคำว่า return แบบนี้มัน return มั้ย
คำตอบคือ return เพราะมัน auto return 
เเต่ถ้าเราเขียน const sum2 = () => {a+b}; มันจะไม่ auto return ละ เราต้องเขียน return เอง สรุปถ้าใส่ {} ต้องเขียน return เอง */

// 3. แบบ3 function expression (anonymous function declaration)
const sum3 = function () {
    return a+b
}


function greet(name, call) { //call เป็น func ที่ถูกส่งเข้ามาเป็น parameter
    return call(name); //เรียก func ที่ส่งเข้ามาจาก call พร้อมส่ง name เข้าไปเป็น argument แล้วคืนค่าผลลัพธ์นั้นกลับมา  เช่น name = "Parinda" → จะเป็น greetHello("Parinda")
}
function greetHello(n) {
    return "Hello, " + n;
}
function greetBye(y) {
    return "Bye, " + y;
}
console.log(greet("Parinda", greetHello)); 
console.log(greet("GG",greetBye));
//เราไม่ได้เรียก greetHello() ตรง ๆ แต่เก็บฟังก์ชันไว้ในตัวแปร call
//เวลา call(name) → ก็เหมือน greetHello(name)

function Test(x){
    return x 
}
function Test2(x) {
    return x + 50
}
console.log(Test(Test2)(14))

// อธิบายเรื่อง Arrow Func
//ธรรมดา
function sum (a, b) {
    return a+b
}

//arrow
const sum1 = (a, b) => a+b 

//Arguments Obj
function doSomething(a, b, ...c){
    console.log(`length: ${arguments.length}`) //length: 3
    console.log(arguments[0]) //1
    console.log(arguments[1]) //2
    console.log(arguments[2]) //3
    console.log(a, b, c) // 1 2 [ 3 ]
}
doSomething(1, 2, 3)


function dowhat(greet='Hi', someone = "Guest", firstSent) {
    return `${greet}, ${someone}, ${firstSent}`
}
console.log(dowhat()) //Hi, Guest, undefined
console.log(dowhat("abc")) //abc, Guest, undefined
console.log(dowhat("xyz", "aaa")) //xyz, aaa, undefined
console.log(dowhat("xyz", "aaa", "bbb")) //xyz, aaa, bbb
console.log(dowhat(undefined, undefined, undefined)) //Hi, Guest, undefined
console.log(dowhat(null, null, null)) //null, null, null
console.log(dowhat("a", "b", "c", "d")) //a, b, c


