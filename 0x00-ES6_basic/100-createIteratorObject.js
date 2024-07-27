export default function createIteratorObject(report) {
    let allEmployees = report.allEmployees
    let employees = Object.values(allEmployees);
    let arr = new Array()
    
    for (const item of employees) {
        arr.push(item)
    }

    return arr;
}
