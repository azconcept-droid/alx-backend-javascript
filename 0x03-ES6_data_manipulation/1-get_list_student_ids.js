export default function getListStudentIds(studentObjs) {
  if (!Array.isArray(studentObjs)) {
    return [];
  }

  const studentIds = studentObjs.map((student) => student.id);

  return studentIds;
}
