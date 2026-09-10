import { calculatePercentage, calculateTotal } from "./5-student.js";

const marks = [85, 78, 92, 88, 74];
const totalMarks = calculateTotal(marks);
const maximumMarks = marks.length * 100;
const percentage = calculatePercentage(totalMarks, maximumMarks);

console.log(`Total marks: ${totalMarks}/${maximumMarks}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
