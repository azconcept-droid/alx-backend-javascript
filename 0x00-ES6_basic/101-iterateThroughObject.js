export default function iterateThroughObject(reportWithIterator) {
  const names = [];
  reportWithIterator.forEach((department) => {
    department.forEach((employee) => {
      names.push(employee);
    });
  });

  return names.join(' | ');
}
