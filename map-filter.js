const number = [3, 4, 5, 6, 7];
//old system
// const output = [];
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const square = element * element;
//     output.push(square);
// }
// console.log(output);


// const result = number.map(function(element) {
//     return element * element
// })

// function square(element) {
//     return element * element;
// }
// const result = number.map(square);
// console.log(result);

const result = number.map(function(element) {
    return element * element;
});

console.log(result);


const square = element => element * element;
const result2 = number.map(element => element * element);
console.log(result2);