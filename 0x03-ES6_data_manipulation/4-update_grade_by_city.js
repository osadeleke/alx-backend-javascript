export default function updateStudentGradeByCity (students, city, newGrade) {
  return students
  .filter((student) => student.location === city)
  .map((student) => {
      student.grade = 'N/A'
      for (const studgrade of newGrade) {
        if (studgrade.studentId === student.id) {
          if (studgrade.grade) {
            student.grade = studgrade.grade
        }
      }
    }
    return student
  })
}