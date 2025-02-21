export default function getStudentIdsSum(studentObjs) {
  const studentIds = studentObjs.map((student) => student.id);

  const sum = studentIds.reduce((accumulator, currentValue) => accumulator + currentValue);

  return sum;
}
