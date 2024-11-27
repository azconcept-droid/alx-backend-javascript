import { readDatabase } from "../utils";

export class StudentsController {
  static getAllStudents(req, res) {
    return res.status(200)
  }

  static getAllStudentsByMajor(req, res) {
    const major = req.query.major;
    if (major !== 'CS' || major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
  }
}
