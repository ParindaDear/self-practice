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