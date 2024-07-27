export default function createIteratorObject(report) {
    let allEmployees = report.allEmployees
    let employees = Object.values(allEmployees);

    let arr = new Array()
    for (let i = 0; i < report.getNumberofDepartments(allEmployees); i++) {
        arr.push(...employees)
    }
    return arr;
}
