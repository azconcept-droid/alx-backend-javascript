export default class ALXCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be string');
    }
    this._name = name;
  }

  set length(len) {
    if (typeof len !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = len;
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be array');
    }
    this._students = students;
  }
}
