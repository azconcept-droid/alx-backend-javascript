interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    contract: true | false;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): void;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    console.log(`${firstName[0]}. ${lastName}`);
};

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working"
    }

    displayName (): string {
        return this.firstName
    }
}
