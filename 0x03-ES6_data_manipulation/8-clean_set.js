export default function cleanSet(set, startString) {
  if (!set || !(set instanceof Set) || typeof startString !== 'string' || !startString) {
    return '';
  }

  const newString = [];
  set.forEach((element) => {
    if (typeof element === 'string' && element.startsWith(startString)) {
      const elementSubString = element.slice(startString.length);
      if (elementSubString && elementSubString !== element) {
        newString.push(elementSubString);
      }
    }
  });

  return newString.join('-');
}
