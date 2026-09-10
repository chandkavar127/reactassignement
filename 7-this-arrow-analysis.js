const student = {
  name: "Amit",
  regularFunction: function () {
    console.log(`regularFunction: ${this.name}`);
  },
  arrowFunction: () => {
    console.log(`arrowFunction: ${this?.name}`);
  },
};

console.log("Original behavior:");
student.regularFunction();
student.arrowFunction();

const correctedStudent = {
  name: "Amit",
  regularFunction: function () {
    console.log(`regularFunction: ${this.name}`);
  },
  arrowFunction: () => {
    console.log(`arrowFunction: ${correctedStudent.name}`);
  },
};

console.log("Corrected behavior:");
correctedStudent.regularFunction();
correctedStudent.arrowFunction();
