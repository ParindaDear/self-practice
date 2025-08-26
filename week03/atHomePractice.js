/* 
Write a function filterArray(arr, fn) that works the same as JavaScript’s built-in .filter() method.
The function should take two arguments:
arr → an array of elements
fn → a callback function that returns true or false for each element
The function should return a new array containing only the elements for which fn returns true.
Example usage
    function isEven(n) { 
    return n % 2 === 0; 
    }
    console.log(filterArray([1, 2, 3, 4, 5], isEven));  // Output: [2, 4]
*/
function filterArray(arr, fn) {
    const result = []; 
    for (let element of arr) { 
        if (fn(element)) {  
            result.push(element); 
        }
    }
    return result;
}

//use
function isEven(n) { 
    return n % 2 === 0; 
}
console.log(filterArray([1, 2, 3, 4, 5], isEven)); 
console.log(filterArray(["apple", "banana", "kiwi"], word => word.length > 4)); 
console.log("======================================================================")

/* Pipe Function
Write a function pipe(...fns) that takes multiple functions and returns a function.
The returned function should apply the given functions from left to right.
function add1(x) { return x + 1; }
function double(x) { return x * 2; }
function square(x) { return x * x; }
const pipeline = pipe(add1, double, square);
console.log(pipeline(2)); // 36  -> square(double(add1(2))) */

function pipe(...fns) {
    return function(initialValue) {
        return fns.reduce((acc, fn) => fn(acc), initialValue);
    }
}

function add1(x) { return x + 1; }
function double(x) { return x * 2; }
function square(x) { return x * x; }

const pipeline = pipe(add1, double, square);

console.log(pipeline(2)); 
console.log("======================================================================")

/*Advanced Currying with Unlimited Arguments
Write a function currySum() that allows chaining unlimited calls until an empty call () is made, then it returns the total sum.
console.log(currySum(1)(2)(3)()); // 6
console.log(currySum(5)(10)(2)(3)()); // 20
*/
function currySum(initial) {
    let sum = initial || 0; // เก็บผลรวม
    function inner(next) {
        if (next === undefined) { 
            return sum;
        }
        sum += next;   // + ค่าที่ส่งเข้ามา
        return inner;  // คืน inner เพื่อให้สามารถเรียกต่อได้
    }
    return inner;
}
console.log(currySum(1)(2)(3)());      
console.log(currySum(5)(10)(2)(3)());
console.log("======================================================================")

/*
Write a function compose(...fns) that works like pipe, but applies functions from right to left.
function add1(x) { return x + 1; }
function double(x) { return x * 2; }
function square(x) { return x * x; }
const composed = compose(square, double, add1);
console.log(composed(2)); // 36  (square(double(add1(2))))
*/
function compose(...fns) {
  return function(initialValue) {
    return fns.reduceRight((acc, fn) => fn(acc), initialValue);
  };
}
function add1(x) { return x + 1; }
function double(x) { return x * 2; }
function square(x) { return x * x; }

const composed = compose(square, double, add1);
console.log(composed(2)); 
console.log("======================================================================")

/*
You have an array of students with their grades:
const students = [
  { name: "Alice", grades: [90, 85, 80] },
  { name: "Bob", grades: [70, 75, 80] },
  { name: "Charlie", grades: [100, 95, 90] }
];

Tasks:
1. averageGrade function
    Takes a student object { name, grades } as parameter
    Use destructuring to access the grades
    Returns the average grade of the student
2. classAverage function
    Takes an array of students
    Returns the average grade of the whole class
3. Optional: Use rest operator to allow averageGrade to accept any number of grades (not just 3)

Example Output:
console.log(averageGrade(students[0]));     // Output: 85
console.log(classAverage(students));        // Output: 85.83333333333333
*/

//1.
function averageGrade({ name, grades }) {
    const total = grades.reduce((sum, g) => sum + g, 0);
    return total / grades.length;
}

//2.
function classAverage(students) {
    const totalSum = students.reduce((sum, student) => sum + averageGrade(student), 0);
    return totalSum / students.length;
}

const students = [
  { name: "Alice", grades: [90, 85, 80] },
  { name: "Bob", grades: [70, 75, 80] },
  { name: "Charlie", grades: [100, 95, 90] }
];

console.log(averageGrade(students[0])); 
console.log(classAverage(students)); 

/* เฉลย Optional ข้อ 3
// Function to calculate average grade of a student using rest parameters
function averageGrade(name, ...grades) {
    const total = grades.reduce((sum, g) => sum + g, 0);
    return total / grades.length;
}
// Function to calculate class average
function classAverage(students) {
    // students: array of arrays like ["Alice", 90, 85, 80]
    const totalSum = students.reduce((sum, student) => {
        const [name, ...grades] = student; // destructuring
        return sum + averageGrade(name, ...grades);
    }, 0);
    return totalSum / students.length;
}
*/

