const common = 10;

function sum(num1, num2) {
    let result1 = num1 + num2 + common;
    const bonus = 50;
    if (bonus > 20) {
        const mood = "happy";
        console.log(mood);
    }
    //console.log(mood);
    return result1;
}
//console.log(bonus); [error for outer scope]
var player = "shakib";
console.log(player);

const result = sum(20, 30);
console.log(result);