export default function createReportObject(employeesList) {

    const report = {
        allEmployees: employeesList,
        getNumberOfDepartments: (employeesList) => {
            count = 0
            for (let departmentName of employeesList) {
                count++;
            }

            return count;
        }
    }

    return report;
}
