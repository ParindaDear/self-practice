//งานที่อาจารย์สั่งเมื่อวันที่ 13 Aug 2025 โดยอ.ให้ทำเรื่อง Shallow Equality โดยเช็กแค่ 1 ชั้น ตามใน PowerPoint
//บางครั้ง Obj มัน Nested กันหลายชั้น เราจะเช็คเเค่ "1 ชั้น" ว่า key กับ value ต้องเท่า
//สมมติว่าเราไม่รู้ Structure มัน เเต่เราต้อง compare object ให้จารย์
let gamer1 = { username: "ShadowHunter", level: 45, rank: "Diamond" };
let gamer2 = { username: "ShadowHunter", level: 45, rank: "Diamond" };

function shallowEquality(object1, object2) {
  //// ดึง key ของ object1 และ object2 ออกมาเป็น array
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {  // วนเช็ค key ของ object1 ทีละตัว
    if (object1[key] !== object2[key]) { //เช็ค value ว่าเท่ากันมั้ย
      return false;
    }
  }
  return true; // ถ้าเช็คครบทุก key แล้วไม่มี value ไหนต่างกันเลยจะถือว่าเท่ากัน
}
console.log("Shallow equality: " + shallowEquality(gamer1, gamer2)); 

/*สิ่งที่ได้เรียนรู้จากการทำ Shallow Equality 
- Shallow Equality มันคือการเปรียบเทียบ key และ value แค่ระดับเดียว ไม่ตรวจลึกถึง obj ที่ซ้อนด้านใน
- การเช็คของมันคือตรวจความยาวของ key โดยถ้าเท่ากัน ถึงจะไปวน loop ตรวจทุก key ว่า value ตรงกันไหม
- Object.keys(obj) ใช้ดึง key ของ obj ออกมาเป็น array
*/