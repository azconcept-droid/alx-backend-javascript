export default function iterateThroughObject(reportWithIterator) {
  let displayItem = '';

  for (const item of reportWithIterator) {
    displayItem += item;
  }

  return displayItem;
}
