const number = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element > 5) {
        break;
    }
    console.log(element);
}

const num = [1, -2, -3, 4, -5, -6, 7, 8];
for (let i = 0; i < num.length; i++) {
    const nums = num[i];
    if (nums < 0) {
        continue;
    }
    console.log(nums);
}