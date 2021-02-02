const student = [
    { id: 12, sName: "Rahim Uddin" },
    { id: 22, sName: "Alkas Mahbub" },
    { id: 42, sName: "Habibur Rahman" },
    { id: 52, sName: "Abdullah Rabi" },
]

//old system
// const studentArray = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     const elementNew = element.sName;
//     studentArray.push(elementNew)
// }
// console.log(studentArray);

const studentName = student.map(s => s.sName);
const studentId = student.map(s => s.id);
const studentBiggerId = student.filter(s => s.id > 40);
console.log(studentBiggerId);