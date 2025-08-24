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