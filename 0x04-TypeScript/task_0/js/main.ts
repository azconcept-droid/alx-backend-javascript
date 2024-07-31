interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Azeez",
    lastName: "Ade",
    age: 80,
    location: "Abuja"
}

const student2: Student = {
    firstName: "Ajoke",
    lastName: "Ade",
    age: 25,
    location: "Lagos"
}

const studentsList = [
    student1,
    student2
]

console.log(studentsList.forEach((student) => [student.firstName, student.location] ))
