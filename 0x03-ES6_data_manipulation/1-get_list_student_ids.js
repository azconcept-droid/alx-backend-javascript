export default function getListStudentIds (ids) {
    if (Array.isArray(ids)) {
        return []
    }

    const studentId = ids.map(student => student.id)

    return studentId;
}
