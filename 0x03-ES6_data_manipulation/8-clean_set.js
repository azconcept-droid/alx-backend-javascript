export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || !startString) {
    return ''
  }

  const newString = [];
  set.forEach((element) => {
    if (element.startsWith(startString) && typeof element !== 'string') {
      newString.push(element.slice(startString.length));
    }
  });

  return newString.join('-');
}
