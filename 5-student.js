export function calculateTotal(marks) {
  return marks.reduce((total, mark) => total + mark, 0);
}

export function calculatePercentage(totalMarks, maximumMarks) {
  return (totalMarks / maximumMarks) * 100;
}
