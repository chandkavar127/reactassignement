const students = [
  { name: "A", marks: 85, course: "BCA" },
  { name: "B", marks: 45, course: "BCA" },
  { name: "C", marks: 72, course: "BSc" },
  { name: "D", marks: 91, course: "BSc" },
  { name: "E", marks: 38, course: "BCA" },
];

const selectedStudents = students.filter(({ marks }) => marks > 50);
const studentNames = students.map(({ name }) => name);
const totalMarks = students.reduce((total, { marks }) => total + marks, 0);
const uniqueCourses = new Set(students.map(({ course }) => course));

console.log(`Students scoring more than 50: ${selectedStudents.length}`);
console.log(`Student names: ${studentNames.join(", ")}`);
console.log(`Total marks: ${totalMarks}`);
console.log(`Unique courses: ${[...uniqueCourses].join(", ")}`);
console.log("Selected student information:");

for (const { name, marks, course } of students) {
  if (marks > 50) {
    console.log(`Name: ${name}, Marks: ${marks}, Course: ${course}`);
  }
}
