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

console.log("======================================================");
/*Practice 2 — Student Scores
Task: You have an object that stores students and their scores in different subjects: 
  const students = {
    Alice: { math: 90, english: 85, science: 92 },
    Bob: { math: 75, english: 80, science: 78 },
    Charlie: { math: 88, english: 95, science: 91 }
  };
1. Write a function printStudentScores(studentsObj) that prints each student's name and their scores in this format:
  Alice:
    math: 90
    english: 85
    science: 92
2. Write a function calculateAverage(studentsObj) that calculates the average score for each student and returns a new object like:
  {
    Alice: 89,
    Bob: 77.67,
    Charlie: 91.33
  }
3. Add a new subject "history" to each student with a score of your choice.
4. Delete the subject "science" for all students.
5. Print the updated students object. */
// Step 0: Original object
const students = {
  Alice: { math: 90, english: 85, science: 92 },
  Bob: { math: 75, english: 80, science: 78 },
  Charlie: { math: 88, english: 95, science: 91 }
};

// 1.
function printStudentScores(studentsObj) {
  for (const student in studentsObj) {
    console.log(student + ":");
    const subjects = studentsObj[student];
    for (const subject in subjects) {
      console.log("  " + subject + ": " + subjects[subject]);
    }
  }
}
printStudentScores(students);

// 2.
function calculateAverage(studentsObj) {
  const averages = {};
  for (const student in studentsObj) {
    const subjects = studentsObj[student];
    let total = 0;
    let count = 0;
    for (const score in subjects) {
      total += subjects[score];
      count++;
    }
    averages[student] = parseFloat((total / count).toFixed(2)); // round to 2 decimals
  }
  return averages;
}
console.log(calculateAverage(students));

// 3.
for (const student in students) {
  students[student].history = 89; 
}

// 4.
for (const student in students) {
  delete students[student].science;
}

// 5.
console.log("\nUpdated Students");
printStudentScores(students);
console.log("======================================================");

/* 
You are given the following employee object:
const employee = {
  eid: "E12345",
  profile: {
    firstName: "Bob",
    lastName: "Smith",
    contact: {
      email: "bob@example.com",
      phone: "0898765432"
    }
  },
  position: {
    yearJoined: 2020,
    department: "Engineering"
  }
}
1. Use object destructuring to extract eid and store it in a variable called employeeId.
2. Extract firstName and lastName from profile and store them in variables fname and lname.
3. Extract email from contact and store it in a variable employeeEmail.
4. Extract department from position and store it in a variable myDepartment.
Finally, use console.log to print all variables.
*/
const employee = {
  eid: "E12345",
  profile: {
    firstName: "Bob",
    lastName: "Smith",
    contact: {
      email: "bob@example.com",
      phone: "0898765432"
    }
  },
  position: {
    yearJoined: 2020,
    department: "Engineering"
  }
}

const { eid: employeeId } = employee;
const { profile: { firstName: fname, lastName: lname } } = employee;
const { profile: { contact: { email: employeeEmail } } } = employee;
const { position: { department: myDepartment } } = employee;

console.log(employeeId);     
console.log(fname);         
console.log(lname);          
console.log(employeeEmail);  
console.log(myDepartment);  