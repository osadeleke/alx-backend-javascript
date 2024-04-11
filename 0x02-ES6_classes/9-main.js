import listOfStudents from "./9-hoisting.js";

console.log(listOfStudents);
console.log('===========================');

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);
console.log('===========================');
console.log(listPrinted)