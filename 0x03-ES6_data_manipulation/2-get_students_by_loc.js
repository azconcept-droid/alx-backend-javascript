export default function getStudentsByLocation(studentObjs, location) {
  const result = studentObjs.filter((student) => student.location === location);

  return result;
}
