export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const students = listStudents.filter((student) => student.location === city);

  return students.map((student) => {
    const grade = newGrades.find((grade) => grade.studentId === student.id);

    return {
      ...student,
      grade: grade ? grade.grade : 'N/A',
    };
  });
}
