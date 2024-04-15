export default function (students) {
  const studentId = [];
  for (const student of students) {
    if (student.id) {
      studentId.push(student.id);
    }
  }
  return studentId;
}
