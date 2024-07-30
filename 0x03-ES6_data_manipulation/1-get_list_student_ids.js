export default function getListStudentIds (ids) {
    if (Array.isArray(ids)) {
        return []
    }

    const studentId = ids.map(({ id }) => ([].push(id)))

    return studentId;
}
