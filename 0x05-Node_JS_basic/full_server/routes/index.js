import { route } from "express"
import { AppController } from "../controllers/AppController"
import { StudentsController } from "../controllers/StudentsController"

route.get('/', AppController.getHomepage)
route.get('/students', StudentsController.getAllStudents)
route.get('/students/:major', StudentsController.getAllStudentsByMajor)

module.exports = route;
