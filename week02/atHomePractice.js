// I ONLY use AI to generate practice questions based on the content I learned in this week.
// I complete all the solution on MY OWN KNOWLEDGE
/*Practice 1 — Student Info
Task:
Create an object named student with the following data:
    name: "Alice"  
    age: 20  
    grade: "A"  
1. Write a function printStudentInfo(studentObj) that prints each property on a separate line, for example:
    Name: Alice  
    Age: 20  
    Grade: A 
2. Add a new property school with the value "ABC School".
3. Remove the grade property from the object.
4. Display the object after the modification.
Expected Result
    === Before Update ===
    Name: Alice
    Age: 20
    Grade: A

    === After Update ===
    { name: 'Alice', age: 20, school: 'ABC School' }
*/
const student = {
  name: "Alice",
  age: 20,
  grade: "A"
};

// 1.
function printStudentInfo(studentObj) {
  console.log("Name: " + studentObj.name);
  console.log("Age: " + studentObj.age);
  console.log("Grade: " + studentObj.grade);
}

console.log("=== Before Update ===");
printStudentInfo(student);

// 2.
student.school = "ABC School";

// 3.
delete student.grade;

// 4.
console.log("\n=== After Update ===");
console.log(student);
