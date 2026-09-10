const presentRollNumbers = new Set([101, 102, 103, 103]);
presentRollNumbers.add(104);
presentRollNumbers.add(101);
presentRollNumbers.delete(102);

const studentNames = new Map([
  [101, "Aarav"],
  [102, "Diya"],
  [103, "Kabir"],
  [104, "Meera"],
]);
studentNames.delete(102);

const rollNumber = 103;
const studentName = studentNames.get(rollNumber);

console.log(`Student with roll number ${rollNumber}: ${studentName}`);
console.log("Present students:");

for (const [currentRollNumber, currentStudentName] of studentNames) {
  if (presentRollNumbers.has(currentRollNumber)) {
    console.log(`${currentRollNumber}: ${currentStudentName}`);
  }
}

console.log(`Total number of unique students: ${presentRollNumbers.size}`);
