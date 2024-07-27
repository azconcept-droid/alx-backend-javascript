export default function createIteratorObject(report) {
    let allEmployees = report.allEmployees
    let employees = Object.values(allEmployees);

    let arr = new Array()
    for (let i = 0; i < report.getNumberOfDepartments(allEmployees); i += 1) {
        arr.push(...employees)
    }
    return arr;
}
