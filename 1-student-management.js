 class Student {
  constructor(name, rollNo, marks) {
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
  }
}

const students = [
  new Student("Aarav", 101, 78),
  new Student("Diya", 102, 56),
  new Student("Kabir", 103, 91),
  new Student("Meera", 104, 64),
  new Student("Rohan", 105, 48),
];

const highScorers = students.filter((student) => student.marks > 60);
const studentNames = students.map((student) => student.name);
const averageMarks = students.reduce((total, student) => total + student.marks, 0) / students.length;

console.log(`Students scoring more than 60: ${highScorers.map((student) => student.name).join(", ")}`);
console.log(`Student names: ${studentNames.join(", ")}`);
console.log(`Average marks: ${averageMarks.toFixed(2)}`);
