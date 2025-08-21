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

