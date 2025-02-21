import getListStudents from "../0-get_list_students.js";
import getStudentsByLocation from "../2-get_students_by_loc.js";

test("getStudentsByLocation is implemented correctly", () => {
  const students = getListStudents();

  expect(getStudentsByLocation(students, 'San Francisco')).toEqual([
    { firstName: "Guillaume", id: 1, location: 'San Francisco' },
    { firstName: "Serena", id: 5, location: 'San Francisco' }
  ]);

  expect(getStudentsByLocation(students, 'Columbia')).toEqual([
    { firstName: "James", id: 2, location: 'Columbia' },
  ]);

  expect(getStudentsByLocation(students, '')).toEqual([]);
});
