//งานที่อาจารย์สั่งเมื่อวันที่ 13 Aug 2025 โดยอ.ให้ทำเรื่อง Shallow Equality โดยเช็กแค่ 1 ชั้น ตามใน PowerPoint
let gamer1 = {
  username: "ShadowHunter",
  level: 45,
  rank: "Diamond"
};
let gamer2 = {
  username: "ShadowHunter",
  level: 45,
  rank: "Diamond"
};

function shallowEquality(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}
console.log("Shallow equality: " + shallowEquality(gamer1, gamer2)); 

/*สิ่งที่ได้เรียนรู้จากการทำ Shallow Equality 
- Shallow Equality มันคือการเปรียบเทียบ key และ value แค่ระดับเดียว ไม่ตรวจลึกถึง obj ที่ซ้อนด้านใน
- การเช็คของมันคือตรวจความยาวของ key โดยถ้าเท่ากันถึงจะไปวน loop ตรวจทุก key ว่า value ตรงกันไหม
- Object.keys(obj) ใช้ดึง key ของ obj ออกมาเป็น array
*/