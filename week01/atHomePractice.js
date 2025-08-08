// I ONLY use AI to generate practice questions based on the content I learned in this week.
// I complete all the solution on MY OWN 

// 7 Aug 2025
/*1.Given an initial array: let arr = [7, 2, 9];
- Append an object {score: 100} to the end of the array
- Then append another array [1, 2] to the end 
- Finally, use a loop to print each item in the array one by on*/
let arr = [7, 2, 9];
arr.push({score: 100});
arr.push([1, 2]);   //ใช้.push(1,2) ไม่ได้เพราะมันจะกลายเป็นว่าเพิ่มค่า 2 ค่า ไม่ได้เพิ่มเป็น array ซึ่งคือ 1 element
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}


/*2. Create an array items with the following elements:
    'apple'
    123
    {type: 'fruit', color: 'red'}
    ['car', 'bike']
    {tools: ['hammer', 'screwdriver']}
Then: Loop through each element in the array
Print its value and type
Expected answer
    Value: apple
    Type: string*/

let items = ['apple',
    123,
    {type: 'fruit', color: 'red'},
    ['car', 'bike'],
    {tools: ['hammer', 'screwdriver']}
]
for (let i=0; i<items.length; i++){
    console.log('Value:', items[i]);
    console.log('Type:', typeof items[i]);
}

// 8 Aug 2025
/* 3. Create an array complexArray with the following items:
"banana", 42, {language: 'JS', year: 1995}, ['HTML', 'CSS'], false, {details: {name: 'Dev', level: 2}}

Then, loop through the array and print:
Index:
Value:
Type: (use typeof)

If the item is an object or array:
For object: print number of keys
For array: print its length
*/

let complexArray = ["banana", 42, {language: 'JS', year: 1995}, ['HTML', 'CSS'], false, {details: {name: 'Dev', level: 2}}];
for (i=0; i < complexArray.length; i++){
    //ที่จริงตรงนี้เราสามารถกำหนดค่าไว้ก่อนได้จะได้ง่ายต่อการเขียน(เป็นคำแนะนำจาก AI) const item = complexArray[i]; 
    console.log('Index:', i);
    console.log('Value', complexArray[i]);
    console.log('Type', typeof(complexArray[i]));

    if (typeof complexArray[i] === 'object'){
        if (Array.isArray(complexArray[i])) {
            console.log('length', complexArray[i].length);
        } else {
            console.log('Number of keys:', Object.keys(complexArray[i]).length);
        }
    }
}
