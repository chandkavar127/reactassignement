function fetchStudentData(shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Unable to retrieve student data."));
        return;
      }

      resolve({
        name: "Aarav",
        rollNo: 101,
        marks: 78,
      });
    }, 2000);
  });
}

async function displayStudentData() {
  try {
    const student = await fetchStudentData();
    console.log(`Student data retrieved: ${student.name}, Roll No: ${student.rollNo}, Marks: ${student.marks}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

displayStudentData();
