export default function createReportObject(employeesList) {

    const report = {
        allEmployees: employeesList,
        getNumberOfDepartments: (employeesList) => {
            let count = 0
            for (const departmentName in employeesList) {
                count++;
            }

            return count;
        }
    }

    return report;
}
