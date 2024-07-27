export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employees = Object.values(allEmployees);
  const arr = new Array();

  for (const item of employees) {
    arr.push(item);
  }

  return arr;
}
