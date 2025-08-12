//All of these problems are taken from the LeetCode website, under the topic of arrays.

// 12 Aug 2025
/*1."Two Sum" 
Given an array of integers nums and a number target,
find two different elements in the array whose sum equals target.
- Return their indices as an array.
- There will always be exactly one valid solution.
- You cannot use the same element twice.
- The order of the returned indices does not matter.
พูดง่ายๆคือ หา index ของตัวเลขสองตัวใน array ที่บวกกันได้เท่ากับ target
Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]
Example 3:
    Input: nums = [3,3], target = 6
    Output: [0,1]
*/

function twoSum(nums, target) {
    for (let i = 0; i <nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));    
console.log(twoSum([3, 3], 6)); 

console.log("=========================================================")

/*2."Longest Common Prefix"
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
Example 1:
    Input: strs = ["flower","flow","flight"]
    Output: "fl"
Example 2:
    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
*/

function longestPrefix(strs){
    if (!strs.length) return "";
    let prefix = strs[0];
    for (let i = 0; i < strs.length; i++){
        while (strs[i].indexOf(prefix) !==0 ){ //ใช้ while เพื่อลดขนาด prefix ทีละตัว จนเจอ prefix ที่ตรงกับ strs[i]
                                               //เตือนความจำ while loop ใช้เมื่อเราต้องการให้โค้ดย้ำทำซ้ำ ตราบใดที่เงื่อนไขยังเป็นจริง (true) ซึ่งยังไม่รู้ล่วงหน้าว่าจะกี่รอบ
            prefix = prefix.slice(0, prefix.length - 1); //ตัดตัวอักษรตัวสุดท้ายของ prefix ออกทีละตัว เพื่อ “ลดขนาด prefix ลงจนเจอ prefix ที่ตรงกับ strs[i]”
            if (prefix === "") return "";
        }
    }
    return prefix;
}
console.log(longestPrefix(["flower","flow","flight"]));
console.log(longestPrefix(["dog","racecar","car"]));

console.log("=========================================================")
