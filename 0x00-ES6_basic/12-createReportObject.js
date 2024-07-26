export default function createReportObject(employeesList) {

    const report = {
        allEmployees: employeesList,
        getNumberOfDepartments: (employeesList) => {
            let count = Object.keys(employeesList).length;

            return count;
        }
    }

    return report;
}
