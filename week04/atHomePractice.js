/*Given the array of numbers:
[5, 10, 15, 20, 25, 30]
Filter out only the even numbers.
Multiply each remaining number by 3.
(Extra challenge) Find the total sum of the transformed numbers using reduce().
Example Output
    console.log("Even numbers:", evens);      Even numbers: [10, 20, 30]
    console.log("After *3:", multiplied);     After *3: [30, 60, 90]
    console.log("Total sum:", total);         Total sum: 180 */
const numbers = [5, 10, 15, 20, 25, 30];

// 1.
const evens = numbers.filter(num => num % 2 === 0);
// 2.
const multiplied = evens.map(num => num * 3);
// 3.
const total = multiplied.reduce((acc, num) => acc + num, 0);

console.log("Even numbers:", evens);       
console.log("After *3:", multiplied);     
console.log("Total sum:", total);          
