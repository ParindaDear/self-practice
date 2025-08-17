/*Practice 2 
Write a JavaScript function calculateTotalPages(items, itemsPerPage) that takes two parameters:
    items (number): The total number of items.
    itemsPerPage (number): The maximum number of items allowed per page.
The function should return the total number of pages needed to accommodate all the items. 
If no item or itemsPerPage is 0 or a negative value, the function should throw an error since a page must be able to contain at least one item.
Output:
    calculateTotalPages(10, 3) // 4
    calculateTotalPages(25, 5) // 5
    calculateTotalPages(0, 5) // 0
    calculateTotalPages(10, 10) // 1
    calculateTotalPages(10, 0) //throw Error('Items per page must be greater than zero.')
ปล.อ.เขียนโจทย์ผิดนิดนึง เพราะไม่ควรมี 2 condition ในอันเดียวกัน 
*/
function calculateTotalPages(items, itemsPerPage) {
    if (itemsPerPage <= 0 || items < 0 ) {
        throw new Error('Items per page must be greater than zero.')
    }
    return Math.ceil(items / itemsPerPage); //Math.ceil()ใช้ปัดขึ้น 
}
console.log(calculateTotalPages(10, 3));
console.log(calculateTotalPages(25, 5));
console.log(calculateTotalPages(0, 5));
console.log(calculateTotalPages(10, 10));
console.log(calculateTotalPages(10, 0));