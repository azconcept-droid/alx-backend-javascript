export default function cleanSet(set, startString) {
  if (!set || !(set instanceof Set) || typeof startString !== 'string' || !startString) {
    return '';
  }

  const newString = [];
  set.forEach((element) => {
    if (element.startsWith(startString) && typeof element !== 'string') {
      const elementSubString = element.slice(startString.length);
      if (elementSubString && elementSubString !== element) {
        newString.push(elementSubString);
      }
    }
  });

  return newString.join('-');
}
