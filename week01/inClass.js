//(การสร้าง array แบบที่ 1)
// 1. build array
let arr = ['cat', 9, true, 'goldfish']; //เป็นการสร้าง array แบบ Array literals

// 2. print array size
console.log(arr.length);

// 3. print the first item
console.log(arr[0]);

// 4. print the last item
console.log(arr[arr.length-1]);

// เนื่องจาก array สามารถเก็บ obj ได้ เลยให้เราลอง add obj เพิ่มเข้าไปใน array เดิม 2 ตัวเลย
// 5. add two more items at the end of array with object and array data types respectively
// วิธี 1 ใช้ push
arr.push({name: 'Bobby', age: 19});
console.log(arr);

//วิธีที่ 2  index ตำแหน่งสุดท้ายโดยตรง
arr[arr.length]=['apple', 'banana']
console.log(arr);

// 6. print evry item in array (loop) 
// วิธี 1 ใช้ for i (แบบ original)
for (let i = 0; i<arr.length; i++){
    console.log(arr[i])
}

// วิธี 2 ใช้ for of
for (const element of arr) {
    console.log(element)
}

// 7. ทำให้ array หด โดยต้องทำให้ length หดด้วย
arr.pop();
console.log(arr);
console.log(arr.length);

//(การสร้าง array แบบที่ 2)
// spread สามารถใช้ได้กับ array เเละ string ดังนั้นอยาให้ลองนำ spred มาใช้กับ ตัวแปร string 
// 8. apply spread on string variable
let str = 'hello word'
const char = [...str]
console.log(char);

//(การสร้าง array แบบที่ 3)
// 9.create array with new constructor
const arr1 = new Array()
console.log(arr1)
const arr2 = new Array(5)
console.log(arr2)
const arr3 = new Array(1, 'JS', true)
console.log(arr3)

const arr4 = Array.of(10) // copy array with item 10
console.log(arr4)
const arr5 = Array.from(arr4) //copy arr4
console.log(arr5)
const str2 = Array.from(str)
console.log(str2)

// เรื่อง destructuring
const [,,a,,...b] = [5, 10, 15, 20, 25]
console.log(a)
console.log(typeof a) //number 
console.log(b)
console.log(typeof b)//object (array)
