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

console.log("=========================================================");

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

console.log("=========================================================")

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

console.log("=========================================================")

// 9 Aug 2025
/*4. Write a function that takes a sentence (string) and returns the first word in the sentence.
If the input is undefined, null, or not a string → return an empty string "".
If the input is an empty string → return "".
Words are separated by spaces " " (no need to remove punctuation).
If the sentence has only one word → return that word.
Examples: firstWord("The quick brown fox") // "The"
          firstWord(12345) // ""
*/
function firstWord(sentence) {
    if (typeof sentence !== "string" || sentence.length === 0){
        return "";
    }
    let words = sentence.split(" ");
    return words[0]; //ไม่ต้องใช้ loop วนหาเพราะเราต้องการเเค่คำแรก
}
console.log(firstWord("The quick brown fox")); 
console.log(firstWord(12345));   

console.log("=========================================================")

/*5. Write a function countVowels(sentence) that 
counts how many vowels (a, e, i, o, u) appear in the sentence.
Conditions:
    -If the input is undefined, null, or not a string → return 0.
    -Countboth lowercase and uppercase vowels.
    -Ignore spaces, numbers, and punctuation — only letters matter.
    -Return the total number of vowels found. 
Examples: countVowels("The quick brown fox") // 5
          countVowels("") // 0            */
function countVowels(sentence) {
    if (typeof sentence !== "string" || sentence.length === 0 ){
        return 0;
    }
    let vowels = "aeiou";
    let count = 0;
    for (let i = 0; i < sentence.length; i++){
        let char = sentence[i].toLowerCase(); //บรรทัดนี้ให้ AI ช่วยเพราะไม่รู้ว่าจะไปต่อยังไงดี ซึ่งมันอธิบายว่าตัวอักษรควรเช็กแบบไม่สนตัวพิมพ์ใหญ่/เล็ก เลยใช้ .toLowerCase()
        if (vowels.includes(char)) { //บรรทัดนี้ให้ AI ช่วย .includes() เป็น method ของ String (และ Array) ใน JS ใช้สำหรับตรวจสอบว่ามีค่าที่เราต้องการอยู่ใน string หรือ array นั้น ๆ หรือไม่โดยถ้าเจอจะคืนค่า true ไม่เจอจะคืนค่า false
            count++;
        }
    }
    return count;
}
console.log(countVowels("The quick brown fox")); 
console.log(countVowels(""));

console.log("=========================================================")

// 10 Aug 2025 วันนี้จะเน้นโจทย์เกี่ยวกับ Destructuring
/*6. Use array destructuring to get the first and third values from:
     const colors = ["red", "green", "blue", "yellow"];
*/
const colors = ["red", "green", "blue", "yellow"];
const [first, , third] = colors; //ใช้เครื่องหมาย , เพื่อข้ามตำแหน่งที่ไม่ต้องการ
console.log(first);
console.log(third);

console.log("=========================================================")

/*7. Use object destructuring to get name and age from:
     const person = { name: "Alice", age: 25, city: "Bangkok" };
*/
const person = { name: "Alice", age: 25, city: "Bangkok" };
const { name, age } = person;
console.log(name);
console.log(age);
console.log("=========================================================")

/*8. Use nested destructuring to get city from:
    const user = {
    id: 1,
    info: {
        name: "Bob",
        address: {
        city: "Chiang Mai",
        zip: 50000
        }
    }
    };
*/
const user = {
  id: 1,
  info: {
    name: "Bob",
    address: {
      city: "Chiang Mai",
      zip: 50000
    }
  }
};
const { info: { address: { city } } } = user;
console.log(city);

console.log("=========================================================")

// 11 Aug 2025
/*9. You have the following data
    const data = [
    { id: 1, name: "Alice", skills: ["HTML", "CSS", "JS"] },
    { id: 2, name: "Bob", skills: ["Python", "Django"] },
    { id: 3, name: "Charlie", skills: ["Java", "Spring", "Hibernate"] }
    ];
- Extract the name of the second person.
- Extract the first skill of the third person.
- Extract the last skill of the first person.
You must solve it using destructuring only — no manual indexing like data[1].name. */

const data = [
  { id: 1, name: "Alice", skills: ["HTML", "CSS", "JS"] },
  { id: 2, name: "Bob", skills: ["Python", "Django"] },
  { id: 3, name: "Charlie", skills: ["Java", "Spring", "Hibernate"] }
];

const [
  { skills: [, , lastSkillFirstPerson] },
  { name: secondName },
  { skills: [firstSkillThirdPerson] }
] = data;

console.log(secondName);            
console.log(firstSkillThirdPerson); 
console.log(lastSkillFirstPerson);  

console.log("=========================================================")
