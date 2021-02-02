const number = [1, 2, 3, 4, 5, 6, 7, 8]
const part = number.slice(1, 5);
// console.log(part);

const removeAdd = number.splice(1, 4, 20, 30, 40, 50);
//console.log(removeAdd);
//console.log(number);

const joint = number.join(",");
console.log(joint);