/*Practice-G2  ข้อสอบยากประมาณนี้เลย เขียน func เพื่อเเก้โจทย์ปัญหา
Write a function getFreqOfWords(sentence) that returns an object with keys representing unique words in lowercase and values representing the frequency of occurrences of each word with ignore case in the sentence. If the input string is null or undefined, return undefined.
Output
    console.log(getFreqOfWords('Today is present and present is your gift'))
    // { today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
    console.log(getFreqOfWords('Do you best just do it'))
    // { do: 2, you: 1, best: 1, just: 1, it: 1 }
    console.log(getFreqOfWords(null)) //undefined
    console.log(getFreqOfWords(undefined)) //undefined */
function getFreqOfWords(sentence) {
    if(sentence === null || sentence === undefined){
        return undefined
    }
    const words = sentence.toLowerCase().split(" ")  //split ใช้เเยก string เป็น array โดยใช้ช่องว่างเเยก
    const freq = {}
    for (let word of words){ //ต้องใช้ for of เพราะเอาไว้สำหรับ วนค่าของสมาชิกใน array โดยตรง ใช้ for in ไม่ได้
        if (freq[word] === undefined) {
            freq[word] = 1; //เจอครั้งเเรก ก็คือทุกตัวต้องเจออยู่เเล้วไง
        } else {
            freq[word] += 1; //เจอเเล้ว เพิ่มอีก1
        }
    }
    return freq
    
}

console.log(getFreqOfWords('Today is present and present is your gift'))
console.log(getFreqOfWords('Do you best just do it'))
console.log(getFreqOfWords(null)) 
console.log(getFreqOfWords(undefined)) 



