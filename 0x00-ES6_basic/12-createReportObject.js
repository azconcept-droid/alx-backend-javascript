export default function createReportObject(employeesList) {
  const report = {
    allEmployees: employeesList,
    getNumberOfDepartments: (employeesList) => {
      const count = Object.keys(employeesList).length;

      return count;
    },
  };

  return report;
}
